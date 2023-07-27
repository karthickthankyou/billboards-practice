import { useDebouncedValue, useTakeSkip } from '@billboards-org/hooks/src/async'
import { useMyBillboardsQuery } from '@billboards-org/network/src/generated'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { useState } from 'react'
import { PlainButton } from '../../atoms/PlainButton'
import { format } from 'date-fns'
import { SimplePagination } from '../../molecules/SimplePagination'

export interface IEarningsProps {}

export const Earnings = ({}: IEarningsProps) => {
  const { setSkip, setTake, skip, take } = useTakeSkip()
  const [searchText, setSearchText] = useState<number | null>(null)
  const debouncedSearchText = useDebouncedValue(searchText)

  const { data, loading } = useMyBillboardsQuery({
    variables: {
      take,
      skip,
      ...(searchText
        ? { where: { id: { equals: debouncedSearchText } } }
        : null),
    },
  })
  return (
    <div>
      <div className="max-w-md my-2">
        <HtmlLabel title="Search billboard id">
          <HtmlInput
            value={searchText || ''}
            placeholder="enter the billboard id"
            onChange={(e) => setSearchText(+e.target.value)}
          />
        </HtmlLabel>
      </div>
      <table className="w-full mt-4 border-separate border-spacing-y-1">
        <tr className="bg-white rounded">
          <th className="py-2 text-left">ID</th>
          <th className="py-2 text-left">Name</th>
          <th className="text-center">Start date</th>
          <th className="text-center">Campaigns</th>
          <th className="text-right">Total earnings</th>
        </tr>
        {data?.myBillboards?.length === 0 ? (
          <tr className="text-center bg-white rounded">
            <td colSpan={5}>
              <div className="py-6 bg-gray-25">
                <div>No results.</div>
                {searchText ? (
                  <PlainButton
                    className="text-xs"
                    onClick={() => setSearchText(null)}
                  >
                    Clear search text.
                  </PlainButton>
                ) : null}
              </div>
            </td>
          </tr>
        ) : null}

        {data?.myBillboards?.map((billboard) => (
          <tr key={billboard.id} className="p-2 bg-white rounded">
            <td className="text-left">{billboard?.id}</td>
            <td className="text-left">
              <div className="font-semibold">{billboard?.name}</div>
              <div className="text-xs text-gray">{billboard?.address}</div>
            </td>
            <td className="p-2 text-center">
              <div>{format(new Date(billboard.createdAt), 'PP')}</div>
            </td>{' '}
            <td className="text-center">{billboard?.campaignsCount}</td>
            <td className="text-right">
              <div className="font-bold">
                Rs.{' '}
                {(billboard.totalBookingDays || 0) *
                  (billboard.pricePerDay || 0)}
              </div>
              <div className="text-xs text-gray">
                {billboard.totalBookingDays} days
              </div>
            </td>{' '}
          </tr>
        ))}
      </table>
      {loading ? 'Loading...' : null}
      <div className="flex justify-center">
        <SimplePagination
          take={take}
          skip={skip}
          setTake={setTake}
          setSkip={setSkip}
          resultCount={data?.billboardAggregate.count || 0}
        />
      </div>
    </div>
  )
}
