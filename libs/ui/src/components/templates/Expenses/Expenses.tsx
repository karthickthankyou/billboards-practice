import { useDebouncedValue, useTakeSkip } from '@billboards-org/hooks/src/async'
import {
  CampaignStatusType,
  useMyCampaignsQuery,
} from '@billboards-org/network/src/generated'
import { useState } from 'react'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { PlainButton } from '../../atoms/PlainButton'
import { format } from 'date-fns'
import { SimplePagination } from '../../molecules/SimplePagination'

export interface IExpensesProps {}

export const Expenses = ({}: IExpensesProps) => {
  const { setSkip, setTake, skip, take } = useTakeSkip()
  const [searchText, setSearchText] = useState('')
  const debouncedSearchText = useDebouncedValue(searchText)

  const { data, loading } = useMyCampaignsQuery({
    variables: {
      take,
      skip,
      ...(searchText
        ? { where: { name: { contains: debouncedSearchText } } }
        : null),
    },
  })
  return (
    <div>
      <div className="max-w-md my-2">
        <HtmlLabel title="Search campaign name">
          <HtmlInput
            value={searchText || ''}
            placeholder="enter the campaign name"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </HtmlLabel>
      </div>
      <table className="w-full mt-4 border-separate border-spacing-y-1">
        <thead>
          <tr className="bg-white rounded">
            <th className="py-2 text-left">ID</th>
            <th className="py-2 text-left">Name</th>
            <th className="text-center">Start date</th>
            <th className="text-center">End date</th>
            <th className="py-2 text-right">Cost</th>
            <th className="text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.myCampaigns?.length === 0 ? (
            <tr className="text-center bg-white rounded">
              <td colSpan={6}>
                <div className="py-6 bg-gray-25">
                  <div>No results.</div>
                  {searchText ? (
                    <PlainButton
                      className="text-xs"
                      onClick={() => setSearchText('')}
                    >
                      Clear search text.
                    </PlainButton>
                  ) : null}
                </div>
              </td>
            </tr>
          ) : null}
        </tbody>
        <tbody>
          {data?.myCampaigns?.map((campaign) => (
            <tr key={campaign.id} className="p-2 bg-white rounded">
              <td className="text-left">{campaign?.id}</td>
              <td className="text-left">
                <div className="font-semibold">{campaign?.name}</div>
              </td>
              <td className="p-2 text-center">
                <div>{format(new Date(campaign.startDate), 'd MMMM')}</div>
                <div className="text-xs text-gray">
                  {format(new Date(campaign.startDate), 'yyyy')}
                </div>
              </td>
              <td className="p-2 text-center">
                <div>{format(new Date(campaign.endDate), 'd MMMM')}</div>
                <div className="text-xs text-gray">
                  {format(new Date(campaign.endDate), 'yyyy')}
                </div>
              </td>
              <td className="text-right">
                {campaign.status?.status === CampaignStatusType.Live ? (
                  <div>
                    <div>
                      Rs. {(campaign?.totalCost || 0) * campaign.totalDays}
                    </div>
                    <div className="text-xs text-gray">
                      {campaign.totalDays} days
                    </div>
                  </div>
                ) : (
                  <div>-</div>
                )}
              </td>
              <td className="p-2 text-right">
                <div>{campaign.status?.status}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading ? 'Loading...' : null}
      <div className="flex justify-center">
        <SimplePagination
          take={take}
          skip={skip}
          setTake={setTake}
          setSkip={setSkip}
          resultCount={data?.campaignAggregate.count || 0}
        />
      </div>
    </div>
  )
}
