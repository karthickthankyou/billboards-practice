import { GetBillboardsQuery } from '@billboards-org/network/src/generated'
import { LoaderPanel } from '../../molecules/Loader'

import { BillboardCard } from '../../organisms/BillboardsCard'
import { NoCampaignResults } from '../AdvertiserPage/AdvertiserPage'
import dynamic from 'next/dynamic'

const Pagination = dynamic(() =>
  import('../../molecules/Pagination').then((module) => module.Pagination),
)

export interface IShowBillboardsProps {
  loading: boolean
  data: GetBillboardsQuery | undefined
  skip: number
  take: number
  setSkip: (skip: number) => void
  setTake: (take: number) => void
  agentOnly?: boolean
}

export const ShowBillboards = ({
  loading,
  data,
  skip,
  take,
  setSkip,
  setTake,
  agentOnly,
}: IShowBillboardsProps) => {
  return (
    <div>
      {loading && <LoaderPanel />}
      {!loading && data && data.billboards.length === 0 && (
        <NoCampaignResults />
      )}

      {!loading && data && data.billboards.length > 0 && (
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.billboards.map((billboard) => (
              <BillboardCard
                agentOnly={agentOnly}
                billboard={billboard}
                key={billboard.id}
              />
            ))}
          </div>
          <Pagination
            count={data?.billboardAggregate.count || 0}
            page={(skip || 0) / (take || 12)}
            rowsPerPage={take || 0}
            showLastButton
            showFirstButton
            rowsPerPageOptions={[2, 4, 12, 24, 36, 48]}
            // onPageChange={(v, c) => setValue('skip', c * (take || 12))}
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
