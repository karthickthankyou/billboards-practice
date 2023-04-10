import { GetCampaignsQuery } from '@billboards-org/network/src/generated'
import { CampaignCard } from '../../organisms/CampaignCard'
import { NoCampaignResults } from '../AdvertiserPage/AdvertiserPage'
import { LoaderPanel } from '../../molecules/Loader'
import dynamic from 'next/dynamic'

const Pagination = dynamic(() =>
  import('../../molecules/Pagination').then((module) => module.Pagination),
)

export interface IShowCampaignsProps {
  loading: boolean
  data: GetCampaignsQuery | undefined
  skip: number
  take: number
  setSkip: (skip: number) => void
  setTake: (take: number) => void
  agentOnly?: boolean
}

export const ShowCampaigns = ({
  data,
  loading,
  skip,
  take,
  setSkip,
  setTake,
  agentOnly = false,
}: IShowCampaignsProps) => {
  return (
    <div>
      {loading ? <LoaderPanel /> : null}
      {data?.campaigns.length === 0 ? (
        <NoCampaignResults />
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.campaigns.map((campaign) => (
              <CampaignCard
                agentOnly={agentOnly}
                campaign={campaign}
                key={campaign.id}
              />
            ))}
          </div>
          <Pagination
            count={data?.campaignAggregate.count || 0}
            page={(skip || 0) / (take || 12)}
            rowsPerPage={take || 0}
            showLastButton
            showFirstButton
            rowsPerPageOptions={[2, 4, 12, 24, 36, 48]}
            onPageChange={(v, c) => setSkip(c * (take || 12))}
            onRowsPerPageChange={(v) => {
              setTake(+v.target.value)
            }}
          />
        </div>
      )}
    </div>
  )
}
