import { InputType, PickType } from '@nestjs/graphql'
import { CampaignTimeline } from '../entities/campaign-timeline.entity'

@InputType()
export class CreateCampaignTimelineInput extends PickType(
  CampaignTimeline,
  ['agentId', 'campaignId', 'notes', 'status'],
  InputType,
) {}
