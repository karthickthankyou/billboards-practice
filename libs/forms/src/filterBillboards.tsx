import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import {
  BillboardStatusType,
  BillboardType,
} from '@billboards-org/network/src/generated'
import { AllBillboardTypes } from './searchBillboards'

export const filterBillboardsFormSchema = z.object({
  type: z.nativeEnum(BillboardType).array().optional(),
  status: z.nativeEnum(BillboardStatusType).array().optional(),
  skip: z.number(),
  take: z.number(),
})

export const AllBillboardStatus = [
  BillboardStatusType.Approved,
  BillboardStatusType.InstallationInprogress,
  BillboardStatusType.Live,
  BillboardStatusType.New,
  BillboardStatusType.OnHold,
  BillboardStatusType.Rejected,
  BillboardStatusType.Verified,
]

export type FilterBillboardFormType = z.infer<typeof filterBillboardsFormSchema>

export const filterBillboardsDefaultValues = {
  type: AllBillboardTypes.sort(),
  status: AllBillboardStatus.sort(),
  skip: 0,
  take: 12,
}

export const useFilterBillboardsForm = () =>
  useForm<FilterBillboardFormType>({
    resolver: zodResolver(filterBillboardsFormSchema),
    defaultValues: filterBillboardsDefaultValues,
  })

export const FormProviderFilterBillboards = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useForm<FilterBillboardFormType>({
    resolver: zodResolver(filterBillboardsFormSchema),
    defaultValues: filterBillboardsDefaultValues,
  })

  return <FormProvider {...methods}>{children}</FormProvider>
}
