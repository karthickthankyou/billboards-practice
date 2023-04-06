import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const createAdvertiserSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
})

export type FormTypeCreateAdvertiser = z.infer<typeof createAdvertiserSchema>

export const useFormCreateAdvertiser = () =>
  useForm<FormTypeCreateAdvertiser>({
    resolver: zodResolver(createAdvertiserSchema),
  })
