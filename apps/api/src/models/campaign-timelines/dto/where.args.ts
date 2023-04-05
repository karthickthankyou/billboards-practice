import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AgentRelationFilter } from 'src/models/agents/dto/where.args'
import { CampaignStatusRelationFilter } from 'src/models/campaign-statuses/dto/where.args'
import { CampaignRelationFilter } from 'src/models/campaigns/dto/where.args'

@InputType()
export class CampaignTimelineWhereUniqueInput
  implements Required<Prisma.CampaignTimelineWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class CampaignTimelineWhereInput
  implements Required<Prisma.CampaignTimelineWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  notes: StringFilter
  @Field(() => IntFilter, { nullable: true })
  campaignId: IntFilter
  @Field(() => StringFilter, { nullable: true })
  agentId: StringFilter
  @Field(() => CampaignRelationFilter, { nullable: true })
  campaign: CampaignRelationFilter
  @Field(() => AgentRelationFilter, { nullable: true })
  agent: AgentRelationFilter
  @Field(() => CampaignStatusRelationFilter, { nullable: true })
  status: CampaignStatusRelationFilter

  @Field(() => [CampaignTimelineWhereInput], { nullable: true })
  AND: CampaignTimelineWhereInput[]
  @Field(() => [CampaignTimelineWhereInput], { nullable: true })
  OR: CampaignTimelineWhereInput[]
  @Field(() => [CampaignTimelineWhereInput], { nullable: true })
  NOT: CampaignTimelineWhereInput[]
}

@InputType()
export class CampaignTimelineListRelationFilter {
  @Field(() => CampaignTimelineWhereInput)
  every?: CampaignTimelineWhereInput
  @Field(() => CampaignTimelineWhereInput)
  some?: CampaignTimelineWhereInput
  @Field(() => CampaignTimelineWhereInput)
  none?: CampaignTimelineWhereInput
}

@InputType()
export class CampaignTimelineRelationFilter {
  @Field(() => CampaignTimelineWhereInput)
  is?: CampaignTimelineWhereInput
  @Field(() => CampaignTimelineWhereInput)
  isNot?: CampaignTimelineWhereInput
}
