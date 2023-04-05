import { CreateCampaignStatusInput } from './create-campaign-status.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { CampaignStatus } from '@prisma/client'

@InputType()
export class UpdateCampaignStatusInput extends PartialType(
  CreateCampaignStatusInput,
) {
  campaignId: CampaignStatus['campaignId']
}
