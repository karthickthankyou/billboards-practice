import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const createAgentSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
})

export type FormTypeCreateAgent = z.infer<typeof createAgentSchema>

export const useFormCreateAgent = () =>
  useForm<FormTypeCreateAgent>({
    resolver: zodResolver(createAgentSchema),
  })
