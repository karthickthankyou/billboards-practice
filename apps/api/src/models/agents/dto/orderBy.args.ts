import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BillboardStatusOrderByRelationAggregateInput } from 'src/models/billboard-statuses/dto/orderBy.args'
import { BillboardTimelineOrderByRelationAggregateInput } from 'src/models/billboard-timelines/dto/orderBy.args'
import { CampaignStatusOrderByRelationAggregateInput } from 'src/models/campaign-statuses/dto/orderBy.args'
import { CampaignTimelineOrderByRelationAggregateInput } from 'src/models/campaign-timelines/dto/orderBy.args'

@InputType()
export class AgentOrderByWithRelationInput
  implements Required<Prisma.AgentOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder
  @Field(() => BillboardStatusOrderByRelationAggregateInput, { nullable: true })
  billboardsStatuses: BillboardStatusOrderByRelationAggregateInput
  @Field(() => CampaignStatusOrderByRelationAggregateInput, { nullable: true })
  campaignsStatuses: CampaignStatusOrderByRelationAggregateInput
  @Field(() => BillboardTimelineOrderByRelationAggregateInput, {
    nullable: true,
  })
  billboardTimeline: BillboardTimelineOrderByRelationAggregateInput
  @Field(() => CampaignTimelineOrderByRelationAggregateInput, {
    nullable: true,
  })
  campaignTimeline: CampaignTimelineOrderByRelationAggregateInput
}

@InputType()
export class AgentOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
