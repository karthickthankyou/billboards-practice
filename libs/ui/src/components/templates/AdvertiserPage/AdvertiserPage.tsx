import {
  GetBillboardsDocument,
  GetFavotireBillboardsDocument,
  namedOperations,
  useGetBillboardsQuery,
  useGetCampaignsQuery,
  useGetFavoritesQuery,
  useGetFavotireBillboardsQuery,
  useRemoveFavoriteMutation,
} from '@billboards-org/network/src/generated'
import { useAppSelector } from '@billboards-org/store'
import { selectUid } from '@billboards-org/store/user'
import { IconBox } from '@tabler/icons-react'
import { LinkButton } from '../../atoms/LinkButton'
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
import { Header } from '../../organisms/Header'

export interface IAdvertiserPageProps {}

export const AdvertiserPage = ({}: IAdvertiserPageProps) => {
  const uid = useAppSelector(selectUid)

  if (!uid) {
    return <LinkButton href={'/login'}>Login</LinkButton>
  }
  return (
    <Container className="flex flex-col gap-12">
      <FormProviderFilterCampaigns>
        <FilterCampaigns />
        <ShowCampaignsAdvertiser uid={uid} />
      </FormProviderFilterCampaigns>
      <ShowFavoritesAdvertiser uid={uid} />
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
  const { setValue } = useFormContext<FilterCampaignFormType>()
  const { status, skip, take } = useWatch<FilterCampaignFormType>()

  const { data, loading } = useGetCampaignsQuery({
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
      {' '}
      <Heading>Campaigns</Heading>
      <RenderDataWithPagination
        pagination={{
          resultCount: data?.campaigns.length || 0,
          totalCount: data?.campaignAggregate.count || 0,
          skip,
          take,
          setSkip: (skip) => setValue('skip', skip),
          setTake: (take) => setValue('take', take),
        }}
        loading={loading}
      >
        {data?.campaigns.map((campaign) => (
          <CampaignCard campaign={campaign} key={campaign.id} />
        ))}
      </RenderDataWithPagination>
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

export const ShowFavoritesAdvertiser = ({ uid }: { uid: string }) => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(12)

  const { data, loading } = useGetFavotireBillboardsQuery({
    variables: {
      skip,
      take,
      where: {
        favorites: { some: { advertiserId: { equals: uid } } },
      },
    },
  })

  return (
    <div>
      <Heading>Favorites</Heading>
      <RenderDataWithPagination
        pagination={{
          resultCount: data?.billboards.length || 0,
          totalCount: data?.billboardAggregate.count || 0,
          skip,
          take,
          setSkip: (skip) => setSkip(skip),
          setTake: (take) => setTake(take),
        }}
        loading={loading}
      >
        {data?.billboards.map((billboard) => (
          <div>
            <BillboardCard billboard={billboard} key={billboard.id} />
            <RemoveFavoriteButton
              advertiserId={uid}
              billboardId={billboard.id}
            />
          </div>
        ))}
      </RenderDataWithPagination>
    </div>
  )
}
