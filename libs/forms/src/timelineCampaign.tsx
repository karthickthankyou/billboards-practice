import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CampaignStatusType } from '@billboards-org/network/src/generated'

export const createCampaignTimelineSchema = z.object({
  notes: z.string(),
  status: z.nativeEnum(CampaignStatusType),
})

export type FormTypeCreateCampaignTimeline = z.infer<
  typeof createCampaignTimelineSchema
>

export const useFormCreateCampaignTimeline = () =>
  useForm<FormTypeCreateCampaignTimeline>({
    resolver: zodResolver(createCampaignTimelineSchema),
  })
