import { Container } from '../../atoms/Container'
import { useGetBillboardsQuery } from '@billboards-org/network/src/generated'
import { NoCampaignResults } from '../AdvertiserPage/AdvertiserPage'
import Link from 'next/link'
import { BillboardCard } from '../../organisms/BillboardsCard/BillboardsCard'
import { FilterOwnerBillboards } from '../../organisms/FilterOwnerBillboards'
import {
  FilterBillboardFormType,
  FormProviderFilterBillboards,
} from '@billboards-org/forms/src/filterBillboards'

import { useWatch, useFormContext } from 'react-hook-form'
import { Pagination } from '../../molecules/Pagination'
import { LoaderPanel } from '../../molecules/Loader'

export interface IOwnerPageProps {
  uid: string
}

export const OwnerPage = ({ uid }: IOwnerPageProps) => {
  return (
    <Container className="space-y-2">
      <FormProviderFilterBillboards>
        <div className="flex items-center justify-end gap-3 mt-4 text-sm">
          <FilterOwnerBillboards />
          <Link href="/billboards/new">New billboard</Link>
        </div>
        <ShowBillboards uid={uid} />
      </FormProviderFilterBillboards>
    </Container>
  )
}

export const ShowBillboards = ({ uid }: { uid: string }) => {
  const { setValue } = useFormContext<FilterBillboardFormType>()
  const { status, type, skip, take } = useWatch<FilterBillboardFormType>()

  const { data, loading } = useGetBillboardsQuery({
    variables: {
      take,
      skip,
      where: {
        ownerId: { equals: uid },
        status: { is: { status: { in: status } } },
        type: { in: type },
      },
    },
  })

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
              <BillboardCard billboard={billboard} key={billboard.id} />
            ))}
          </div>
          <Pagination
            count={data?.billboardAggregate.count || 0}
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
