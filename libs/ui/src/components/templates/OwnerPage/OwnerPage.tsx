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

export interface IOwnerPageProps {
  uid: string
}

export const OwnerPage = ({ uid }: IOwnerPageProps) => {
  return (
    <Container className="space-y-2">
      <div className="flex justify-end mt-4 text-sm">
        <Link href="/billboards/new">New billboard</Link>
      </div>
      <ShowApprovedBillboards uid={uid} />
      <ShowUnapprovedBillboards uid={uid} />
    </Container>
  )
}

export const BillboardsTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell>Id</TableCell>
      <TableCell align="right">Name</TableCell>
      <TableCell align="right">Address</TableCell>
      <TableCell align="right">Min booking days</TableCell>
      <TableCell align="right">Price / Day</TableCell>
      <TableCell align="right">Total booked days</TableCell>
      <TableCell align="right">Booked?</TableCell>
    </TableRow>
  </TableHead>
)

export const BillboardsTableBody = ({
  billboards,
}: {
  billboards: GetBillboardsQuery['billboards']
}) => {
  return (
    <TableBody>
      {billboards.map((row) => (
        <TableRow
          key={row.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell align="right">{row.name}</TableCell>
          <TableCell align="right" component="th" scope="row">
            {row.address}
          </TableCell>
          <TableCell align="right">{row.minBookingDays}</TableCell>
          <TableCell align="right" component="th" scope="row">
            {row.pricePerDay}
          </TableCell>
          <TableCell align="right">{row.totalBookingDays}</TableCell>
          <TableCell align="right">
            {row.booked ? 'Booked' : 'Not booked'}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export const ShowApprovedBillboards = ({ uid }: { uid: string }) => {
  const { data, loading } = useGetBillboardsQuery({
    variables: {
      where: {
        ownerId: { equals: uid },
        status: { is: { status: { equals: BillboardStatusType.Approved } } },
      },
    },
  })

  return (
    <div>
      <Heading>Approved Billboards</Heading>
      {loading && <TableLoading />}
      {!loading && data && data.billboards.length === 0 && (
        <NoCampaignResults />
      )}

      {!loading && data && data.billboards.length > 0 && (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <BillboardsTableHead />
          <BillboardsTableBody billboards={data.billboards} />
        </Table>
      )}
    </div>
  )
}

export const ShowUnapprovedBillboards = ({ uid }: { uid: string }) => {
  const { data, loading } = useGetBillboardsQuery({
    variables: {
      where: {
        ownerId: { equals: uid },
        status: { is: { status: { not: BillboardStatusType.Approved } } },
      },
    },
  })

  return (
    <div>
      <Heading>Unapproved Billboards</Heading> {loading && <TableLoading />}
      {!loading && data && data.billboards.length === 0 && (
        <NoCampaignResults />
      )}
      {!loading && data && data.billboards.length > 0 && (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <BillboardsTableHead />
          <BillboardsTableBody billboards={data?.billboards} />
        </Table>
      )}
    </div>
  )
}
