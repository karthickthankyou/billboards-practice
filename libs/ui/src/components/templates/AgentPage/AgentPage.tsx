import { Tab } from '@headlessui/react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useState } from 'react'

import { Button } from '../../atoms/Button'
import { Container } from '../../atoms/Container'
import {
  BillboardStatusType,
  CampaignStatusType,
  useGetBillboardsQuery,
  useGetCampaignsQuery,
} from '@billboards-org/network/src/generated'

export interface IAgentPageProps {}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const AgentPage = ({}: IAgentPageProps) => {
  return (
    <Container>
      <Tab.Group>
        <Tab.List className="flex max-w-md p-1 space-x-1 bg-gray-200">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-1 text-sm',
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
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Height</TableCell>
              <TableCell align="right">Width</TableCell>
              <TableCell align="right">Angle</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
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
                  {row.height}
                </TableCell>
                <TableCell align="right">{row.width}</TableCell>
                <TableCell align="right">{row.angle}</TableCell>
                <TableCell align="right">{row.address || ''}</TableCell>
                <TableCell align="right">
                  <Button variant="text" size="none">
                    Approve
                  </Button>
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
  })

  return (
    <>
      <div>Approved</div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Height</TableCell>
              <TableCell align="right">Width</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
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
                  {row.height}
                </TableCell>
                <TableCell align="right">{row.width}</TableCell>
                <TableCell align="right">{row.address || ''}</TableCell>
                <TableCell align="right">Approve</TableCell>
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
    variables: { where: { status: { is: null } } },
  })

  return (
    <div>
      <div>UnApproved: {data?.campaigns.length}</div>
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
  })

  return (
    <div>
      <div>Approved: {data?.campaigns.length}</div>
    </div>
  )
}
