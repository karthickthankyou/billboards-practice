import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { CampaignStatusType } from '@billboards-org/network/src/generated'

export const filterCampaignsFormSchema = z.object({
  status: z.nativeEnum(CampaignStatusType).array().optional(),
  skip: z.number(),
  take: z.number(),
})

export const AllCampaignStatus = [
  CampaignStatusType.Inprogress,
  CampaignStatusType.Live,
  CampaignStatusType.New,
  CampaignStatusType.OnHold,
  CampaignStatusType.Rejected,
  CampaignStatusType.Verified,
]

export type FilterCampaignFormType = z.infer<typeof filterCampaignsFormSchema>

export const filterCampaignsDefaultValues = {
  status: AllCampaignStatus.sort(),
  skip: 0,
  take: 12,
}

export const useFilterCampaignsForm = () =>
  useForm<FilterCampaignFormType>({
    resolver: zodResolver(filterCampaignsFormSchema),
    defaultValues: filterCampaignsDefaultValues,
  })

export const FormProviderFilterCampaigns = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useForm<FilterCampaignFormType>({
    resolver: zodResolver(filterCampaignsFormSchema),
    defaultValues: filterCampaignsDefaultValues,
  })

  return <FormProvider {...methods}>{children}</FormProvider>
}
