import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AgentOrderByWithRelationInput } from 'src/models/agents/dto/orderBy.args'
import { CampaignOrderByWithRelationInput } from 'src/models/campaigns/dto/orderBy.args'

@InputType()
export class CampaignTimelineOrderByWithRelationInput
  implements Required<Prisma.CampaignTimelineOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  status: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  notes: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  campaignId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  agentId: Prisma.SortOrder
  @Field(() => CampaignOrderByWithRelationInput, { nullable: true })
  campaign: CampaignOrderByWithRelationInput
  @Field(() => AgentOrderByWithRelationInput, { nullable: true })
  agent: AgentOrderByWithRelationInput
}

@InputType()
export class CampaignTimelineOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
