import {
  Tab,
  Tabs,
  TabPanel,
} from '@billboards-org/ui/src/components/molecules/Tabs'
import { useWatch, useFormContext } from 'react-hook-form'

import { Button } from '../../atoms/Button'
import { Container } from '../../atoms/Container'
import {
  BillboardStatusType,
  namedOperations,
  useAgentMeQuery,
  useCreateBillboardTimelineMutation,
  useCreateCampaignTimelineMutation,
  useBillboardsQuery,
  useCampaignsQuery,
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
import { Dialog } from '../../atoms/Dialog'
import { Form } from '../../atoms/Form'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { useFormCreateBillboardTimeline } from '@billboards-org/forms/src/timelineBillboard'
import { useFormCreateCampaignTimeline } from '@billboards-org/forms/src/timelineCampaign'
import HtmlSelect from '../../atoms/HtmlSelect'
import { HtmlTextArea } from '../../atoms/HtmlTextArea'
import { BillboardCard } from '../../organisms/BillboardsCard'
import { CampaignCard } from '../../organisms/CampaignCard'
import { CreateAgent } from '../../organisms/CreateAgent'
import { useTakeSkip } from '@billboards-org/hooks/src/async'
import { ShowData } from '../../organisms/ShowData'

export interface IAgentPageProps {
  uid: string
}

export const AgentPage = ({ uid }: IAgentPageProps) => {
  const { data, loading } = useAgentMeQuery()
  const [value, setValue] = useState(0)

  if (!data?.agentMe) {
    return <CreateAgent uid={uid} />
  }
  return (
    <Container>
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        aria-label="bookings"
      >
        <Tab label="Billboards" />
        <Tab label="Campaigns" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <FormProviderFilterBillboards>
          <div className="flex justify-end my-2">
            <FilterOwnerBillboards />
          </div>
          <ShowBillboardsAgent />
        </FormProviderFilterBillboards>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormProviderFilterCampaigns>
          <div className="flex justify-end my-2">
            <FilterCampaigns />
          </div>

          <ShowCampaignsAgent />
        </FormProviderFilterCampaigns>
      </TabPanel>
    </Container>
  )
}

export const ApproveBillboardButton = ({
  billboardId,
  className,
}: {
  billboardId: number
  className?: string
}) => {
  const uid = useAppSelector(selectUid)
  const [createBillboardTimeline, { loading }] =
    useCreateBillboardTimelineMutation({
      awaitRefetchQueries: true,
      refetchQueries: [namedOperations.Query.billboards],
    })
  const [showDialog, setshowDialog] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormCreateBillboardTimeline()

  return (
    <div>
      <Button
        onClick={() => setshowDialog(true)}
        variant="outlined"
        className={className}
      >
        Update
      </Button>
      <Dialog
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
      </Dialog>
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
      refetchQueries: [namedOperations.Query.campaigns],
    })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormCreateCampaignTimeline()

  const [showDialog, setshowDialog] = useState(false)

  return (
    <div>
      <Button onClick={() => setshowDialog(true)} variant="outlined">
        Update
      </Button>
      <Dialog
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
      </Dialog>
    </div>
  )
}

export const ShowBillboardsAgent = () => {
  const { setSkip, setTake, skip, take } = useTakeSkip()
  const { status, type } = useWatch<FilterBillboardFormType>()

  const { loading, data } = useBillboardsQuery({
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
    <ShowData
      pagination={{
        resultCount: data?.billboards.length || 0,
        totalCount: data?.billboardAggregate.count || 0,
        setSkip,
        setTake,
        skip,
        take,
      }}
      loading={loading}
    >
      {data?.billboards.map((billboard) => (
        <div>
          <BillboardCard billboard={billboard} key={billboard.id} />
          <ApproveBillboardButton billboardId={billboard.id} className="mt-2" />
        </div>
      ))}
    </ShowData>
  )
}

export const ShowCampaignsAgent = () => {
  const { setValue } = useFormContext<FilterCampaignFormType>()
  const { setSkip, setTake, skip, take } = useTakeSkip()

  const { status } = useWatch<FilterCampaignFormType>()

  const { data, loading } = useCampaignsQuery({
    variables: {
      take,
      skip,
      where: {
        status: { is: { status: { in: status } } },
      },
    },
  })

  return (
    <ShowData
      pagination={{
        resultCount: data?.campaigns.length || 0,
        totalCount: data?.campaignAggregate.count || 0,
        skip,
        take,
        setSkip,
        setTake,
      }}
      loading={loading}
    >
      {data?.campaigns.map((campaign) => (
        <div className="flex flex-col gap-2">
          <CampaignCard campaign={campaign} key={campaign.id} />
          <ApproveCampaignButton campaignId={campaign.id} />
        </div>
      ))}
    </ShowData>
  )
}
