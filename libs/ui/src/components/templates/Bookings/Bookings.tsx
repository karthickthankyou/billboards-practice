import { useMyBookingsQuery } from '@billboards-org/network/src/generated'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { Header } from '../../organisms/Header'
import { useState } from 'react'
import { PlainButton } from '../../atoms/PlainButton'
import { format } from 'date-fns'
import { SimplePagination } from '../../molecules/SimplePagination'
import { useTakeSkip } from '@billboards-org/hooks/src/async'

export interface IBookingsProps {}

export const Bookings = ({}: IBookingsProps) => {
  const { setSkip, setTake, skip, take } = useTakeSkip()
  const [searchText, setSearchText] = useState<number | null>(null)
  const { data, loading } = useMyBookingsQuery({
    variables: {
      skip,
      take,
      ...(searchText ? { where: { id: { equals: searchText } } } : null),
    },
  })
  return (
    <div>
      <div className="max-w-md my-2">
        <HtmlLabel title="Search item id">
          <HtmlInput
            value={searchText || ''}
            placeholder="enter the product item id"
            onChange={(e) => setSearchText(+e.target.value)}
          />
        </HtmlLabel>
      </div>
      <table className="w-full mt-4 border-separate border-spacing-y-1">
        <tr className="bg-white rounded">
          <th className="py-2 text-left">Billboard</th>
          <th className="py-2 text-left">Campaign</th>
          <th className="text-center">Start date</th>
          <th className="text-center">End date</th>
          <th className="text-right">Price per day</th>
        </tr>
        {data?.myBookings?.length === 0 ? (
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

        {data?.myBookings?.map((booking) => (
          <tr key={booking.id} className="p-2 bg-white rounded">
            <td className="text-left">{booking.billboard?.name}</td>
            <td className="text-left">{booking.campaign?.name}</td>
            <td className="p-2 text-center">
              <div>{format(new Date(booking.campaign?.startDate), 'PP')}</div>
              <div className="text-xs text-gray">
                {format(new Date(booking.campaign?.startDate), 'p')}
              </div>
            </td>
            <td className="p-2 text-center">
              <div>{format(new Date(booking.campaign?.endDate), 'PP')}</div>
              <div className="text-xs text-gray">
                {format(new Date(booking.campaign?.endDate), 'p')}
              </div>
            </td>
            <td className="text-right">{booking.pricePerDay}</td>
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
          resultCount={data?.bookingsCount.count || 0}
        />
      </div>
    </div>
  )
}
