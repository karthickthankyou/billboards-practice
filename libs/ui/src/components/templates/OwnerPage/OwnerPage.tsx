import { Container } from '../../atoms/Container'
import { useGetBillboardsQuery } from '@billboards-org/network/src/generated'
import Link from 'next/link'
import { FilterOwnerBillboards } from '../../organisms/FilterOwnerBillboards'
import {
  FilterBillboardFormType,
  FormProviderFilterBillboards,
} from '@billboards-org/forms/src/filterBillboards'

import { useWatch, useFormContext } from 'react-hook-form'
import { RenderDataWithPagination } from '../ShowBillboards'
import { BillboardCard } from '../../organisms/BillboardsCard'
import { ApproveBillboardButton } from '../AgentPage/AgentPage'

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
        <ShowBillboardsOwner uid={uid} />
      </FormProviderFilterBillboards>
    </Container>
  )
}

export const ShowBillboardsOwner = ({ uid }: { uid: string }) => {
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
    <RenderDataWithPagination
      pagination={{
        resultCount: data?.billboards.length || 0,
        totalCount: data?.billboardAggregate.count || 0,
        skip,
        take,
        setSkip: (skip) => setValue('skip', skip),
        setTake: (take) => setValue('take', take),
      }}
      loading={loading}
    >
      {data?.billboards.map((billboard) => (
        <BillboardCard billboard={billboard} key={billboard.id} />
      ))}
    </RenderDataWithPagination>
  )
}
