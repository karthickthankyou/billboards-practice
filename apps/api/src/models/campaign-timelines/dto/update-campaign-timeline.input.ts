import { CreateCampaignTimelineInput } from './create-campaign-timeline.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { CampaignTimeline } from '@prisma/client'

@InputType()
export class UpdateCampaignTimelineInput extends PartialType(
  CreateCampaignTimelineInput,
) {
  id: CampaignTimeline['id']
}
