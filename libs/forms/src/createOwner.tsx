import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const createOwnerSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
})

export type FormTypeCreateOwner = z.infer<typeof createOwnerSchema>

export const useFormCreateOwner = () =>
  useForm<FormTypeCreateOwner>({
    resolver: zodResolver(createOwnerSchema),
  })
