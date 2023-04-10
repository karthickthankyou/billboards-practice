import { Container } from '../../atoms/Container'
import { useGetBillboardsQuery } from '@billboards-org/network/src/generated'
import Link from 'next/link'
import { FilterOwnerBillboards } from '../../organisms/FilterOwnerBillboards'
import {
  FilterBillboardFormType,
  FormProviderFilterBillboards,
} from '@billboards-org/forms/src/filterBillboards'

import { useWatch, useFormContext } from 'react-hook-form'
import { ShowBillboards } from '../ShowBillboards'

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
    <ShowBillboards
      data={data}
      loading={loading}
      skip={skip || 0}
      take={take || 12}
      setSkip={(skip) => setValue('skip', skip)}
      setTake={(take) => setValue('take', take)}
    />
  )
}
