import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { BillboardType } from '@billboards-org/network/src/generated'
import { getYesterday } from '@billboards-org/util'

const minMaxTuple = z.tuple([z.number(), z.number()])

const dateRangeSchema = z
  .object({
    startDate: z.string().optional(),
    endDate: z.string().optional(),
  })
  .refine(
    (data) => {
      return data.startDate && data.endDate
    },
    {
      message: `Start and end dates are required.`,
    },
  )
  .refine(
    (data) => {
      const start = new Date(data.startDate || '')
      const yesterday = getYesterday()
      return start > yesterday
    },
    (data) => ({
      message: `Start date ${data.startDate} can not be in the past`,
    }),
  )
  .refine(
    (data) => {
      const end = new Date(data.endDate || '')
      const yesterday = getYesterday()
      return end > yesterday
    },
    (data) => ({
      message: `End date ${data.endDate} can not be in the past`,
    }),
  )
  .refine(
    (data) => {
      const start = new Date(data.startDate || '')
      const end = new Date(data.endDate || '')

      return end > start
    },
    (data) => ({
      message: `End date ${data.endDate} can not be on or before the start date.`,
    }),
  )

export const searchBillboardsFormSchema = z.object({
  campaignName: z.string().min(1, { message: 'Campaign name is required.' }),
  dateRange: dateRangeSchema,

  searchText: z.string().optional(),

  locationInfo: z
    .object({
      placeName: z.string().optional(),
      latLng: z.tuple([z.number(), z.number()]).optional(),
      zoom: z.number().optional(),
    })
    .optional(),

  locationFilter: z
    .object(
      {
        nw_lat: z.number().optional(),
        nw_lng: z.number().optional(),
        se_lat: z.number().optional(),
        se_lng: z.number().optional(),
      },
      { required_error: 'Search for required location' },
    )
    .refine(
      (data) => {
        return data.nw_lat && data.nw_lng && data.se_lat && data.se_lng
      },
      { message: 'Search for required location' },
    ),

  type: z.nativeEnum(BillboardType).array().optional(),

  pricePerHour: minMaxTuple.optional(),
  impressionsPerDay: minMaxTuple.optional(),
  height: minMaxTuple.optional(),
  width: minMaxTuple.optional(),

  skip: z.number().optional(),
  take: z.number().optional(),
})

export type SearchBillboardFormType = z.infer<typeof searchBillboardsFormSchema>

export const AllBillboardTypes = [
  BillboardType.Classic,
  BillboardType.Led,
  BillboardType.Neon,
  BillboardType.ThreeDimensional,
  BillboardType.Vinyl,
]

export const BillboardTypeText = {
  [BillboardType.Classic]: 'Classic',
  [BillboardType.Led]: 'LED',
  [BillboardType.Neon]: 'Neon',
  [BillboardType.ThreeDimensional]: '3D',
  [BillboardType.Vinyl]: 'Vinyl',
}

const getDates = () => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const oneMonthLater = new Date(tomorrow)
  oneMonthLater.setMonth(oneMonthLater.getMonth() + 1)

  return {
    startDate: tomorrow.toISOString().substring(0, 10),
    endDate: oneMonthLater.toISOString().substring(0, 10),
  }
}

export const searchBillboardsDefaultValues = {
  pricePerHour: [0, 200] as [number, number],
  width: [0, 200] as [number, number],
  height: [0, 200] as [number, number],
  impressionsPerDay: [0, 100000] as [number, number],
  type: AllBillboardTypes.sort(),
}

export const FormProviderSearchBillboards = ({
  children,
}: {
  children: ReactNode
}) => {
  const { endDate, startDate } = getDates()
  const methods = useForm<SearchBillboardFormType>({
    resolver: zodResolver(searchBillboardsFormSchema),
    defaultValues: {
      dateRange: { startDate, endDate },
      ...searchBillboardsDefaultValues,
    },
  })

  return <FormProvider {...methods}>{children}</FormProvider>
}
