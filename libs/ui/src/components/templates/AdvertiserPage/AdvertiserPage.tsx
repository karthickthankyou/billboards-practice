import {
  namedOperations,
  useGetAdvertiserQuery,
  useCampaignsQuery,
  useGetFavotireBillboardsQuery,
  useRemoveFavoriteMutation,
} from '@billboards-org/network/src/generated'
import { IconBox } from '@tabler/icons-react'
import { Container } from '../../atoms/Container'
import { ReactNode, useState } from 'react'
import { useWatch, useFormContext } from 'react-hook-form'
import {
  FilterCampaignFormType,
  FormProviderFilterCampaigns,
} from '@billboards-org/forms/src/filterCampaigns'
import { FilterCampaigns } from '../../organisms/FilterCampaigns'
import { RenderDataWithPagination } from '../ShowBillboards'
import { BillboardCard } from '../../organisms/BillboardsCard'
import { CampaignCard } from '../../organisms/CampaignCard'
import { Button } from '../../atoms/Button'
import { CreateAdvertiser } from '../../organisms/CreateAdvertiser'
import { useTakeSkip } from '@billboards-org/hooks/src/async'
import { ShowData } from '../../organisms/ShowData'

export interface IAdvertiserPageProps {
  uid: string
}

export const AdvertiserPage = ({ uid }: IAdvertiserPageProps) => {
  const { data } = useGetAdvertiserQuery({
    variables: { where: { uid } },
  })

  if (!data?.advertiser) {
    return <CreateAdvertiser uid={uid} />
  }

  return (
    <Container className="flex flex-col gap-12">
      <FormProviderFilterCampaigns>
        <div className="flex justify-end my-2">
          <FilterCampaigns />
        </div>
        <ShowCampaignsAdvertiser uid={uid} />
      </FormProviderFilterCampaigns>
    </Container>
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
  <div className="mt-2 mb-3 text-lg font-semibold">{children}</div>
)

export const ShowCampaignsAdvertiser = ({ uid }: { uid: string }) => {
  const { setSkip, setTake, skip, take } = useTakeSkip()
  const { status } = useWatch<FilterCampaignFormType>()

  const { data, loading } = useCampaignsQuery({
    variables: {
      skip,
      take,
      where: {
        advertiserId: { equals: uid },
        status: { is: { status: { in: status } } },
      },
    },
  })

  return (
    <div>
      <Heading>Campaigns</Heading>
      <ShowData
        pagination={{
          resultCount: data?.campaigns.length || 0,
          totalCount: data?.campaignAggregate.count || 0,
          setSkip,
          setTake,
          skip,
          take,
        }}
        loading={loading}
      >
        {data?.campaigns.map((campaign) => (
          <CampaignCard campaign={campaign} key={campaign.id} />
        ))}
      </ShowData>
    </div>
  )
}

export const RemoveFavoriteButton = ({
  advertiserId,
  billboardId,
}: {
  advertiserId: string
  billboardId: number
}) => {
  const variables = {
    where: {
      advertiserId_billboardId: {
        advertiserId,
        billboardId,
      },
    },
  }
  const [mutateRemoveFavoriteAsync, { loading: removingFavorite }] =
    useRemoveFavoriteMutation({
      refetchQueries: [namedOperations.Query.GetFavotireBillboards],
      awaitRefetchQueries: true,
    })
  return (
    <Button
      isLoading={removingFavorite}
      onClick={async () => {
        await mutateRemoveFavoriteAsync({
          variables,
        })
      }}
      size="none"
      variant="text"
    >
      Remove
    </Button>
  )
}
