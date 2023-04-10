import { useGetCampaignsQuery } from '@billboards-org/network/src/generated'
import { useAppSelector } from '@billboards-org/store'
import { selectUid } from '@billboards-org/store/user'
import { IconBox } from '@tabler/icons-react'
import { LinkButton } from '../../atoms/LinkButton'
import { Container } from '../../atoms/Container'
import { ReactNode } from 'react'
import { CampaignCard } from '../../organisms/CampaignCard'
import { useWatch, useFormContext } from 'react-hook-form'
import {
  FilterCampaignFormType,
  FormProviderFilterCampaigns,
} from '@billboards-org/forms/src/filterCampaigns'
import { Pagination } from '../../molecules/Pagination'
import { FilterCampaigns } from '../../organisms/FilterCampaigns'

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
        <ShowCampaigns uid={uid} />
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

export const ShowCampaigns = ({ uid }: { uid: string }) => {
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
      {data?.campaigns.length === 0 ? (
        <NoCampaignResults />
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.campaigns.map((campaign) => (
              <CampaignCard campaign={campaign} key={campaign.id} />
            ))}
          </div>
          <Pagination
            count={data?.campaignAggregate.count || 0}
            page={(skip || 0) / (take || 12)}
            rowsPerPage={take || 0}
            showLastButton
            showFirstButton
            rowsPerPageOptions={[2, 4, 12, 24, 36, 48]}
            onPageChange={(v, c) => setValue('skip', c * (take || 12))}
            onRowsPerPageChange={(v) => {
              setValue('take', +v.target.value)
            }}
          />
        </div>
      )}
    </div>
  )
}
