import { Tab } from '@headlessui/react'
import {
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableCellProps,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import { Button } from '../../atoms/Button'
import { Container } from '../../atoms/Container'
import {
  BillboardStatusType,
  CampaignStatusType,
  GetBillboardsDocument,
  GetBillboardsQuery,
  namedOperations,
  useCreateBillboardTimelineMutation,
  useCreateCampaignTimelineMutation,
  useGetBillboardsQuery,
  useGetCampaignsQuery,
} from '@billboards-org/network/src/generated'
import { useAppSelector } from '@billboards-org/store'
import { selectUid } from '@billboards-org/store/user'
import { IconCheck } from '@tabler/icons-react'
import { format } from 'date-fns'
import { notification$ } from '@billboards-org/util/subjects'
import { Heading } from '../AdvertiserPage/AdvertiserPage'

export interface IAgentPageProps {}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const TableCell = (props: TableCellProps) => (
  <MuiTableCell classes={{ root: 'py-2 px-0 border-b-0' }} {...props} />
)

export const AgentPage = ({}: IAgentPageProps) => {
  return (
    <Container>
      <Tab.Group>
        <Tab.List className="flex max-w-md p-1 space-x-1 bg-gray-200">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-1 text-sm border-b-0',
                selected ? 'bg-white' : 'bg-gray-200',
              )
            }
          >
            Billboards
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-1 text-sm',
                selected ? 'bg-white' : 'bg-gray-200',
              )
            }
          >
            Campaigns
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ShowUnapprovedBillboards />
            <ShowApprovedBillboards />
          </Tab.Panel>
          <Tab.Panel>
            <ShowUnapprovedCampaigns />
            <ShowApprovedCampaigns />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Container>
  )
}

const TableHeadBillboards = () => (
  <TableHead>
    <TableRow className="border-b-[1px]">
      <TableCell>Id</TableCell>
      <TableCell>Dimensions</TableCell>
      <TableCell align="right">Angle</TableCell>
      <TableCell align="right">Address</TableCell>
      <TableCell align="right">Actions</TableCell>
    </TableRow>
  </TableHead>
)

export const ApproveButton = ({ billboardId }: { billboardId: number }) => {
  const uid = useAppSelector(selectUid)
  const [createBillboardTimeline, { loading }] =
    useCreateBillboardTimelineMutation({
      awaitRefetchQueries: true,
      refetchQueries: [namedOperations.Query.GetBillboards],
    })

  return (
    <Button
      isLoading={loading}
      onClick={async () => {
        await createBillboardTimeline({
          variables: {
            createBillboardTimelineInput: {
              billboardId,
              agentId: uid,
              notes: 'Looks good ',
              status: BillboardStatusType.Live,
            },
          },
        })
      }}
      variant="text"
      size="none"
    >
      Approve
    </Button>
  )
}

export const ShowUnapprovedBillboards = () => {
  const { data } = useGetBillboardsQuery({
    variables: {
      where: {
        status: { is: { status: { not: BillboardStatusType.Approved } } },
      },
    },
  })

  return (
    <>
      <div>Unapproved</div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeadBillboards />
          <TableBody>
            {data?.billboards.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.height} ft x {row.width} ft
                </TableCell>
                <TableCell align="right">{row.angle}&deg;</TableCell>
                <TableCell align="right">{row.address || ''}</TableCell>
                <TableCell align="right">
                  <ApproveButton billboardId={row.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export const ShowApprovedBillboards = () => {
  const { data } = useGetBillboardsQuery({
    variables: {
      where: {
        status: { is: { status: { equals: BillboardStatusType.Approved } } },
      },
    },
    fetchPolicy: 'cache-and-network',
  })

  return (
    <>
      <div>Approved</div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeadBillboards />
          <TableBody>
            {data?.billboards.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.width} ft x{row.height} ft
                </TableCell>
                <TableCell align="right">{row.angle || ''}&deg; </TableCell>
                <TableCell align="right">{row.address || ''}</TableCell>
                <TableCell align="right">
                  <div className="flex justify-end">
                    <IconCheck className="w-5 h-5" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export const ShowUnapprovedCampaigns = () => {
  const { data } = useGetCampaignsQuery({
    variables: {
      where: { status: { is: { status: { equals: CampaignStatusType.New } } } },
    },
  })

  const uid = useAppSelector(selectUid)

  const [createCampaignMutation, { loading }] =
    useCreateCampaignTimelineMutation()

  return (
    <div>
      <Heading>Unapproved Campaigns</Heading>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell>Start date</TableCell>
              <TableCell align="right">End date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Bookings</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.campaigns.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell component="th" scope="row">
                  {format(new Date(row.startDate), 'PP')}
                </TableCell>
                <TableCell align="right">
                  {format(new Date(row.endDate), 'PP')}
                </TableCell>

                <TableCell align="right">{row.status.status}</TableCell>
                <TableCell align="right">{row.bookings.length}</TableCell>
                <TableCell align="right">
                  <Button
                    isLoading={loading}
                    onClick={async () => {
                      if (!uid) {
                        notification$.next({
                          message: 'You are not logged in.',
                        })
                        return
                      }
                      await createCampaignMutation({
                        variables: {
                          createCampaignTimelineInput: {
                            campaignId: row.id,
                            agentId: uid,
                            notes: 'Auto approved',
                            status: CampaignStatusType.Approved,
                          },
                        },
                      })
                    }}
                    variant="text"
                    size="none"
                  >
                    Approve
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export const ShowApprovedCampaigns = () => {
  const { data } = useGetCampaignsQuery({
    variables: {
      where: {
        status: { is: { status: { equals: CampaignStatusType.Approved } } },
      },
    },
    notifyOnNetworkStatusChange: true,
  })

  return (
    <div>
      <Heading>Approved Campaigns</Heading>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell>Start date</TableCell>
              <TableCell align="right">End date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Bookings</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.campaigns.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell component="th" scope="row">
                  {format(new Date(row.startDate), 'PP')}
                </TableCell>
                <TableCell align="right">
                  {format(new Date(row.endDate), 'PP')}
                </TableCell>

                <TableCell align="right">{row.status.status}</TableCell>
                <TableCell align="right">{row.bookings.length}</TableCell>
                <TableCell align="right">
                  <div className="flex justify-end">
                    <IconCheck className="w-5 h-5" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
