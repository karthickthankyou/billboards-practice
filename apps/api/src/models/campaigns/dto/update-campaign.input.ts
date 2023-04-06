import { CreateCampaignInput } from './create-campaign.input'
import { InputType, OmitType, PartialType } from '@nestjs/graphql'
import { Campaign } from '@prisma/client'

@InputType()
export class UpdateCampaignInput extends PartialType(
  OmitType(CreateCampaignInput, ['bookings']),
) {
  id: Campaign['id']
}
