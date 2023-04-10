import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { Container } from '../../atoms/Container'
import {
  BillboardStatusType,
  GetBillboardsQuery,
  useGetBillboardsQuery,
} from '@billboards-org/network/src/generated'
import {
  Heading,
  NoCampaignResults,
  TableLoading,
} from '../AdvertiserPage/AdvertiserPage'
import Badge from '../../atoms/Badge'
import Link from 'next/link'
import { BillboardCard } from '../../organisms/BillboardsCard/BillboardsCard'

export interface IOwnerPageProps {
  uid: string
}

export const OwnerPage = ({ uid }: IOwnerPageProps) => {
  return (
    <Container className="space-y-2">
      <div className="flex justify-end mt-4 text-sm">
        <Link href="/billboards/new">New billboard</Link>
      </div>
      <ShowBillboards uid={uid} />
    </Container>
  )
}

export const ShowBillboards = ({ uid }: { uid: string }) => {
  const { data, loading } = useGetBillboardsQuery({
    variables: {
      where: {
        ownerId: { equals: uid },
      },
    },
  })

  return (
    <div>
      {loading && <TableLoading />}
      {!loading && data && data.billboards.length === 0 && (
        <NoCampaignResults />
      )}

      {!loading && data && data.billboards.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.billboards.map((billboard) => (
            <BillboardCard billboard={billboard} key={billboard.id} />
          ))}
        </div>
      )}
    </div>
  )
}
