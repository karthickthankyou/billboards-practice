import {
  CampaignStatusType,
  GetCampaignsQuery,
  useGetCampaignsQuery,
} from '@billboards-org/network/src/generated'
import { useAppSelector } from '@billboards-org/store'
import { selectUid } from '@billboards-org/store/user'
import { Table, TableBody, TableHead, TableRow } from '@mui/material'
import { IconArrowRight, IconBox, IconCheck } from '@tabler/icons-react'
import { differenceInDays, format } from 'date-fns'
import { LinkButton } from '../../atoms/LinkButton'
import { Container } from '../../atoms/Container'
import { LoaderPanel } from '../../molecules/Loader'
import { ReactNode } from 'react'
import { TableCell } from '../AgentPage/AgentPage'
import Badge from '../../atoms/Badge'

export interface IAdvertiserPageProps {}

export const AdvertiserPage = ({}: IAdvertiserPageProps) => {
  const uid = useAppSelector(selectUid)

  if (!uid) {
    return <LinkButton href={'/login'}>Login</LinkButton>
  }
  return (
    <Container className="flex flex-col gap-12">
      <ShowApprovedCampaigns uid={uid} />
      <ShowUnapprovedCampaigns uid={uid} />
    </Container>
  )
}

export const CampaignsTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell>Id</TableCell>
      <TableCell align="right">Name</TableCell>
      <TableCell align="right">Date range</TableCell>
      <TableCell align="right">Bookings</TableCell>
      <TableCell align="right">Price / Day</TableCell>
      <TableCell align="right">Status</TableCell>
    </TableRow>
  </TableHead>
)

export const TableLoading = () => {
  return (
    <TableRow>
      <LoaderPanel />
    </TableRow>
  )
}

export const CampaignsTableBody = ({
  data,
  loading,
}: {
  data: GetCampaignsQuery | undefined
  loading: boolean
}) => {
  return (
    <TableBody>
      {loading ? <TableLoading /> : null}
      {data?.campaigns.map((row) => (
        <TableRow
          key={row.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell align="right">{row.name}</TableCell>
          <TableCell align="right" component="th" scope="row">
            <div className="flex items-center justify-end gap-2">
              {format(new Date(row.startDate), 'PP')}{' '}
              <IconArrowRight className="w-4 h-4" />
              {format(new Date(row.endDate), 'PP')}
            </div>
            <span className="text-xs">
              {differenceInDays(new Date(row.endDate), new Date(row.startDate))}{' '}
              days
            </span>
          </TableCell>

          <TableCell align="right">{row.bookings.length}</TableCell>
          <TableCell align="right">
            {row.bookings.reduce(
              (total, booking) => (total += booking.pricePerDay || 0),
              0,
            )}
          </TableCell>
          <TableCell align="right">
            {' '}
            <Badge variant="green" size="sm">
              {row.status.status}
            </Badge>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export const NoCampaignResults = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-60 bg-gray-50">
      <IconBox className="w-10 h-10" />
      <div className="text-sm">No results</div>
    </div>
  )
}

export const Heading = ({ children }: { children: ReactNode }) => (
  <div className="text-lg font-semibold">{children}</div>
)

export const ShowApprovedCampaigns = ({ uid }: { uid: string }) => {
  const { data, loading } = useGetCampaignsQuery({
    variables: {
      where: {
        advertiserId: { equals: uid },
        status: { is: { status: { equals: CampaignStatusType.Approved } } },
      },
    },
  })

  return (
    <div>
      <Heading>Approved Campaigns</Heading>{' '}
      {data?.campaigns.length === 0 ? (
        <NoCampaignResults />
      ) : (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <CampaignsTableHead />
          <CampaignsTableBody data={data} loading={loading} />
        </Table>
      )}
    </div>
  )
}

export const ShowUnapprovedCampaigns = ({ uid }: { uid: string }) => {
  const { data, loading } = useGetCampaignsQuery({
    variables: {
      where: {
        advertiserId: { equals: uid },
        status: { is: { status: { not: CampaignStatusType.Approved } } },
      },
    },
  })

  return (
    <div>
      <Heading>UnApproved Campaigns</Heading>

      {data?.campaigns.length === 0 ? (
        <NoCampaignResults />
      ) : (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <CampaignsTableHead />
          <CampaignsTableBody data={data} loading={loading} />
        </Table>
      )}
    </div>
  )
}
