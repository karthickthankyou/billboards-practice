import { CreateCampaignInput } from './create-campaign.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Campaign } from '@prisma/client'

@InputType()
export class UpdateCampaignInput extends PartialType(CreateCampaignInput) {
  id: Campaign['id']
}
