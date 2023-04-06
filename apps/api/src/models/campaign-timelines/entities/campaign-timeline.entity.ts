import { Field, ObjectType } from '@nestjs/graphql'
import {
  CampaignStatusType,
  CampaignTimeline as CampaignTimelineType,
} from '@prisma/client'

@ObjectType()
export class CampaignTimeline implements CampaignTimelineType {
  @Field(() => CampaignStatusType)
  status: CampaignStatusType
  id: number
  createdAt: Date
  updatedAt: Date
  @Field(() => String, { nullable: true })
  notes: string
  campaignId: number
  @Field(() => String, { nullable: true })
  agentId: string
}
