import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { BillboardStatusType } from '@billboards-org/network/src/generated'

export const createBillboardTimelineSchema = z.object({
  notes: z.string(),
  status: z.nativeEnum(BillboardStatusType),
})

export type FormTypeCreateBillboardTimeline = z.infer<
  typeof createBillboardTimelineSchema
>

export const useFormCreateBillboardTimeline = () =>
  useForm<FormTypeCreateBillboardTimeline>({
    resolver: zodResolver(createBillboardTimelineSchema),
  })
