import { Field, InputType } from '@nestjs/graphql'
import { CampaignStatusType, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AgentRelationFilter } from 'src/models/agents/dto/where.args'
import { CampaignTimelineListRelationFilter } from 'src/models/campaign-timelines/dto/where.args'
import { CampaignRelationFilter } from 'src/models/campaigns/dto/where.args'

@InputType()
export class CampaignStatusWhereUniqueInput
  implements Required<Prisma.CampaignStatusWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  campaignId: number
}

@InputType()
export class EnumCampaignStatusTypeFilter {
  @Field(() => CampaignStatusType, { nullable: true })
  equals: CampaignStatusType;
  @Field(() => [CampaignStatusType], { nullable: true })
  in: CampaignStatusType[]
  @Field(() => [CampaignStatusType], { nullable: true })
  notIn: CampaignStatusType[]
  @Field(() => CampaignStatusType, { nullable: true })
  not: CampaignStatusType
}

@InputType()
export class CampaignStatusWhereInput
  implements Required<Prisma.CampaignStatusWhereInput>
{
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => EnumCampaignStatusTypeFilter, { nullable: true })
  status: EnumCampaignStatusTypeFilter
  @Field(() => IntFilter, { nullable: true })
  campaignId: IntFilter
  @Field(() => StringFilter, { nullable: true })
  agentId: StringFilter
  @Field(() => CampaignRelationFilter, { nullable: true })
  campaign: CampaignRelationFilter
  @Field(() => AgentRelationFilter, { nullable: true })
  agent: AgentRelationFilter
  @Field(() => CampaignTimelineListRelationFilter, { nullable: true })
  campaignTimeline: CampaignTimelineListRelationFilter

  @Field(() => [CampaignStatusWhereInput], { nullable: true })
  AND: CampaignStatusWhereInput[]
  @Field(() => [CampaignStatusWhereInput], { nullable: true })
  OR: CampaignStatusWhereInput[]
  @Field(() => [CampaignStatusWhereInput], { nullable: true })
  NOT: CampaignStatusWhereInput[]
}

@InputType()
export class CampaignStatusListRelationFilter {
  @Field(() => CampaignStatusWhereInput)
  every?: CampaignStatusWhereInput
  @Field(() => CampaignStatusWhereInput)
  some?: CampaignStatusWhereInput
  @Field(() => CampaignStatusWhereInput)
  none?: CampaignStatusWhereInput
}

@InputType()
export class CampaignStatusRelationFilter {
  @Field(() => CampaignStatusWhereInput)
  is?: CampaignStatusWhereInput
  @Field(() => CampaignStatusWhereInput)
  isNot?: CampaignStatusWhereInput
}
