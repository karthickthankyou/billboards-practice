import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { BillboardType } from '@billboards-org/network/src/generated'

export const createManySlotsSchema = z.object({
  pricePerHour: z.number(),
  height: z.number().optional(),
  width: z.number().optional(),
  type: z.nativeEnum(BillboardType),
  startingSlotNumber: z.number(),
  numberOfSlots: z.number(),
})

export type FormTypeCreateGarage = z.infer<typeof createManySlotsSchema>

export const useCreateManySlotsForm = () =>
  useForm<FormTypeCreateGarage>({
    resolver: zodResolver(createManySlotsSchema),
  })
