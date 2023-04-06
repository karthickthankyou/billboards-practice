import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const createGarageSchema = z.object({
  companyId: z.string().min(1),
  displayName: z.string().min(1),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
})

export type FormTypeCreateGarage = z.infer<typeof createGarageSchema>

export const useCreateGarageForm = () =>
  useForm<FormTypeCreateGarage>({
    resolver: zodResolver(createGarageSchema),
  })
