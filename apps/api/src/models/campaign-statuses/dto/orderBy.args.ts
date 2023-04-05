import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AgentOrderByWithRelationInput } from 'src/models/agents/dto/orderBy.args'
import { CampaignTimelineOrderByRelationAggregateInput } from 'src/models/campaign-timelines/dto/orderBy.args'
import { CampaignOrderByWithRelationInput } from 'src/models/campaigns/dto/orderBy.args'

@InputType()
export class CampaignStatusOrderByWithRelationInput
  implements Required<Prisma.CampaignStatusOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  status: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  campaignId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  agentId: Prisma.SortOrder
  @Field(() => CampaignOrderByWithRelationInput, { nullable: true })
  campaign: CampaignOrderByWithRelationInput
  @Field(() => AgentOrderByWithRelationInput, { nullable: true })
  agent: AgentOrderByWithRelationInput
  @Field(() => CampaignTimelineOrderByRelationAggregateInput, {
    nullable: true,
  })
  CampaignTimeline: CampaignTimelineOrderByRelationAggregateInput
}

@InputType()
export class CampaignStatusOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
