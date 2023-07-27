import { LoaderPanel } from '../../molecules/Loader'

import { BillboardCard } from '../../organisms/BillboardsCard'
import { NoCampaignResults } from '../AdvertiserPage/AdvertiserPage'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const Pagination = dynamic(() =>
  import('../../molecules/Pagination').then((module) => module.Pagination),
)

export interface IShowBillboardsProps {
  loading: boolean
  pagination: {
    skip?: number
    take?: number
    resultCount: number
    totalCount: number
    setSkip: (skip: number) => void
    setTake: (take: number) => void
  }
  children?: ReactNode
}

export const RenderDataWithPagination = ({
  loading,
  pagination: {
    resultCount,
    setSkip,
    setTake,
    skip = 0,
    take = 12,
    totalCount,
  },
  children,
}: IShowBillboardsProps) => {
  return (
    <div>
      {loading && <LoaderPanel />}
      {!loading && resultCount === 0 && <NoCampaignResults />}

      {!loading && resultCount > 0 && (
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {children}
          </div>
          <Pagination
            count={totalCount || 0}
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
