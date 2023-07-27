import { Container } from '../../atoms/Container'
import { useBillboardsQuery } from '@billboards-org/network/src/generated'
import Link from 'next/link'

import { BillboardCard } from '../../organisms/BillboardsCard'
import { IsLoggedIn } from '../IsLoggedIn'
import { useTakeSkip } from '@billboards-org/hooks/src/async'
import { ShowData } from '../../organisms/ShowData'

export interface IOwnerPageProps {}

export const OwnerPage = () => {
  return (
    <Container className="space-y-2">
      <IsLoggedIn>
        {(uid) => (
          <>
            <div className="flex items-center justify-end gap-3 mt-4 text-sm">
              <Link href="/createBillboard">New billboard</Link>
            </div>
            <ShowBillboardsOwner uid={uid} />
          </>
        )}
      </IsLoggedIn>
    </Container>
  )
}

export const ShowBillboardsOwner = ({ uid }: { uid: string }) => {
  const { take, setSkip, setTake, skip } = useTakeSkip()

  const { data, loading } = useBillboardsQuery({
    variables: {
      take,
      skip,
      where: {
        ownerId: { equals: uid },
      },
    },
  })

  return (
    <ShowData
      loading={loading}
      title={undefined}
      pagination={{
        resultCount: data?.billboards.length,
        totalCount: data?.billboardAggregate.count,
        take,
        setSkip,
        setTake,
        skip,
      }}
    >
      {data?.billboards.map((billboard) => (
        <BillboardCard billboard={billboard} key={billboard.id} />
      ))}
    </ShowData>
  )
}
