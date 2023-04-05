import { InputType, PickType } from '@nestjs/graphql'
import { CampaignStatus } from '../entities/campaign-status.entity'

@InputType()
export class CreateCampaignStatusInput extends PickType(
  CampaignStatus,
  ['agentId', 'campaignId', 'status'],
  InputType,
) {}
