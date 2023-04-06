import { z } from 'zod'

export const filterFormSchema = z.object({
  placeName: z.string(),
  startTime: z.date().refine((date) => date > new Date()),
  endTime: z.date().refine((date) => date > new Date()),
  sortBy: z.string().optional(),
  rating: z.number().optional(),
  pricePerHour: z.number().array().length(2).optional(),
  type: z.string().array().optional(),
})

export const filterFormSchemaRefined = filterFormSchema.refine(
  (data) => data.endTime > data.startTime,
  {
    message: 'End date should be after start date',
    path: ['endTime'],
  },
)

export type FilterFormType = z.infer<typeof filterFormSchema>
