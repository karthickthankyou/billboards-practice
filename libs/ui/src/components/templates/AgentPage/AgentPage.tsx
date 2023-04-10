import { Tab } from '@headlessui/react'
import { useWatch, useFormContext } from 'react-hook-form'

import { Button } from '../../atoms/Button'
import { Container } from '../../atoms/Container'
import {
  BillboardStatusType,
  namedOperations,
  useCreateBillboardTimelineMutation,
  useCreateCampaignTimelineMutation,
  useGetBillboardsQuery,
  useGetCampaignsQuery,
} from '@billboards-org/network/src/generated'
import { useAppSelector } from '@billboards-org/store'
import { selectUid } from '@billboards-org/store/user'
import {
  FilterBillboardFormType,
  FormProviderFilterBillboards,
} from '@billboards-org/forms/src/filterBillboards'
import {
  FilterCampaignFormType,
  FormProviderFilterCampaigns,
} from '@billboards-org/forms/src/filterCampaigns'
import { FilterCampaigns } from '../../organisms/FilterCampaigns'
import { FilterOwnerBillboards } from '../../organisms/FilterOwnerBillboards'
import { RenderDataWithPagination } from '../ShowBillboards'
import { useState } from 'react'
import { Dialog2 } from '../../atoms/Dialog2'
import { Form } from '../../atoms/Form'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { useFormCreateBillboardTimeline } from '@billboards-org/forms/src/timelineBillboard'
import { useFormCreateCampaignTimeline } from '@billboards-org/forms/src/timelineCampaign'
import HtmlSelect from '../../atoms/HtmlSelect'
import { HtmlTextArea } from '../../atoms/HtmlTextArea'
import { BillboardCard } from '../../organisms/BillboardsCard'
import { CampaignCard } from '../../organisms/CampaignCard'

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
            <FormProviderFilterBillboards>
              <FilterOwnerBillboards />
              <ShowBillboardsAgent />
            </FormProviderFilterBillboards>
          </Tab.Panel>
          <Tab.Panel>
            <FormProviderFilterCampaigns>
              <FilterCampaigns />
              <ShowCampaignsAgent />
            </FormProviderFilterCampaigns>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Container>
  )
}

export const ApproveBillboardButton = ({
  billboardId,
}: {
  billboardId: number
}) => {
  const uid = useAppSelector(selectUid)
  const [createBillboardTimeline, { loading }] =
    useCreateBillboardTimelineMutation({
      awaitRefetchQueries: true,
      refetchQueries: [namedOperations.Query.GetBillboards],
    })
  const [showDialog, setshowDialog] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormCreateBillboardTimeline()

  return (
    <div>
      <Button onClick={() => setshowDialog(true)} variant="text" size="none">
        Approve
      </Button>
      <Dialog2
        title="Update billboard status"
        setOpen={setshowDialog}
        open={showDialog}
      >
        <Form
          onSubmit={handleSubmit(async ({ notes, status }) => {
            await createBillboardTimeline({
              variables: {
                createBillboardTimelineInput: {
                  billboardId,
                  agentId: uid,
                  notes,
                  status,
                },
              },
            })
          })}
        >
          <HtmlLabel title="Type" error={errors.status?.message?.toString()}>
            <HtmlSelect {...register('status')}>
              <option value={BillboardStatusType.New}>New</option>
              <option value={BillboardStatusType.Verified}>Verified</option>
              <option value={BillboardStatusType.Inprogress}>Inprogress</option>
              <option value={BillboardStatusType.OnHold}>OnHold</option>
              <option value={BillboardStatusType.Rejected}>Rejected</option>
              <option value={BillboardStatusType.Live}>Live</option>
            </HtmlSelect>
          </HtmlLabel>{' '}
          <HtmlLabel title="Notes" error={errors.notes?.message?.toString()}>
            <HtmlTextArea
              placeholder="Write something..."
              {...register('notes')}
            />
          </HtmlLabel>
          <Button isLoading={loading} type="submit">
            Submit
          </Button>
        </Form>
      </Dialog2>
    </div>
  )
}
export const ApproveCampaignButton = ({
  campaignId,
}: {
  campaignId: number
}) => {
  const uid = useAppSelector(selectUid)
  const [createCampaignTimeline, { loading }] =
    useCreateCampaignTimelineMutation({
      awaitRefetchQueries: true,
      refetchQueries: [namedOperations.Query.GetCampaigns],
    })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormCreateCampaignTimeline()

  const [showDialog, setshowDialog] = useState(false)

  return (
    <div>
      <Button onClick={() => setshowDialog(true)} variant="text" size="none">
        Approve
      </Button>
      <Dialog2
        title="Update campaign status"
        setOpen={setshowDialog}
        open={showDialog}
      >
        <Form
          onSubmit={handleSubmit(async ({ notes, status }) => {
            await createCampaignTimeline({
              variables: {
                createCampaignTimelineInput: {
                  campaignId,
                  agentId: uid,
                  notes,
                  status,
                },
              },
            })
            setshowDialog(false)
          })}
        >
          <HtmlLabel title="Type" error={errors.status?.message?.toString()}>
            <HtmlSelect {...register('status')}>
              <option value={BillboardStatusType.New}>New</option>
              <option value={BillboardStatusType.Verified}>Verified</option>
              <option value={BillboardStatusType.Inprogress}>Inprogress</option>
              <option value={BillboardStatusType.OnHold}>OnHold</option>
              <option value={BillboardStatusType.Rejected}>Rejected</option>
              <option value={BillboardStatusType.Live}>Live</option>
            </HtmlSelect>
          </HtmlLabel>{' '}
          <HtmlLabel title="Notes" error={errors.notes?.message?.toString()}>
            <HtmlTextArea
              placeholder="Write something..."
              {...register('notes')}
            />
          </HtmlLabel>
          <Button isLoading={loading} type="submit">
            Submit
          </Button>
        </Form>
      </Dialog2>
    </div>
  )
}

export const ShowBillboardsAgent = () => {
  const { setValue } = useFormContext<FilterBillboardFormType>()
  const { status, type, skip, take } = useWatch<FilterBillboardFormType>()

  const { loading, data } = useGetBillboardsQuery({
    variables: {
      skip,
      take,
      where: {
        status: { is: { status: { in: status } } },
        type: { in: type },
      },
    },
    fetchPolicy: 'cache-and-network',
  })

  return (
    <RenderDataWithPagination
      pagination={{
        resultCount: data?.billboards.length || 0,
        totalCount: data?.billboardAggregate.count || 0,
        skip,
        take,
        setSkip: (skip: number) => setValue('skip', skip),
        setTake: (take: number) => setValue('take', take),
      }}
      loading={loading}
    >
      {data?.billboards.map((billboard) => (
        <div>
          <BillboardCard billboard={billboard} key={billboard.id} />
          <ApproveBillboardButton billboardId={billboard.id} />
        </div>
      ))}
    </RenderDataWithPagination>
  )
}

export const ShowCampaignsAgent = () => {
  const { setValue } = useFormContext<FilterCampaignFormType>()
  const { status, skip, take } = useWatch<FilterCampaignFormType>()

  const { data, loading } = useGetCampaignsQuery({
    variables: {
      take,
      skip,
      where: {
        status: { is: { status: { in: status } } },
      },
    },
  })

  return (
    <RenderDataWithPagination
      pagination={{
        resultCount: data?.campaigns.length || 0,
        totalCount: data?.campaignAggregate.count || 0,
        skip,
        take,
        setSkip: (skip: number) => setValue('skip', skip),
        setTake: (take: number) => setValue('take', take),
      }}
      loading={loading}
    >
      {data?.campaigns.map((campaign) => (
        <CampaignCard campaign={campaign} key={campaign.id} />
      ))}
    </RenderDataWithPagination>
  )
}
