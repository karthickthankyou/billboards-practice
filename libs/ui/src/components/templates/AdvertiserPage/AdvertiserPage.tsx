import { useGetCampaignsQuery } from '@billboards-org/network/src/generated'
import { useAppSelector } from '@billboards-org/store'
import { selectUid } from '@billboards-org/store/user'
import { IconBox } from '@tabler/icons-react'
import { LinkButton } from '../../atoms/LinkButton'
import { Container } from '../../atoms/Container'
import { ReactNode } from 'react'
import { useWatch, useFormContext } from 'react-hook-form'
import {
  FilterCampaignFormType,
  FormProviderFilterCampaigns,
} from '@billboards-org/forms/src/filterCampaigns'
import { FilterCampaigns } from '../../organisms/FilterCampaigns'
import { ShowCampaigns } from '../ShowCampaigns'

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
  <div className="text-lg font-semibold">{children}</div>
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
    <ShowCampaigns
      data={data}
      loading={loading}
      skip={skip || 0}
      take={take || 12}
      setSkip={(skip) => setValue('skip', skip)}
      setTake={(take) => setValue('take', take)}
    />
  )
}
