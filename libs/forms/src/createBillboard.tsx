import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { BillboardType } from '@billboards-org/network/src/generated'
import { ReactNode } from 'react'

export const createBillboardSchema = z.object({
  width: z.number({ invalid_type_error: 'Width is required' }).min(1),
  height: z.number({ invalid_type_error: 'Height is required' }),
  impressionsPerDay: z.number({
    invalid_type_error: 'Impressions is required',
  }),
  minBookingDays: z.coerce.number().default(0).optional(),
  pricePerDay: z.number({ invalid_type_error: 'Price is required' }),
  images: z.any().optional(),
  type: z.nativeEnum(BillboardType),
  lat: z.number(),
  elevation: z.number(),
  angle: z.number(),
  lng: z.number(),
  name: z.string(),
  address: z.string(),
})

export type FormTypeCreateBillboard = z.infer<typeof createBillboardSchema>

export const initialViewState = {
  longitude: 80.2,
  latitude: 12.9,
  zoom: 8,
}

export const useCreateBillboardForm = () =>
  useForm<FormTypeCreateBillboard>({
    resolver: zodResolver(createBillboardSchema),
    defaultValues: {
      angle: 0,
      lat: initialViewState.latitude,
      lng: initialViewState.longitude,
    },
  })

export const FormProviderCreateBillboard = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useCreateBillboardForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}
