import { Field, ObjectType } from '@nestjs/graphql'
import { CampaignTimeline as CampaignTimelineType } from '@prisma/client'

@ObjectType()
export class CampaignTimeline implements CampaignTimelineType {
  id: number
  createdAt: Date
  updatedAt: Date
  @Field(() => String, { nullable: true })
  notes: string
  campaignId: number
  @Field(() => String, { nullable: true })
  agentId: string
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
