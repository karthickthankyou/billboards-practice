import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, StringFilter } from 'src/common/dtos/common.input'
import { BillboardStatusListRelationFilter } from 'src/models/billboard-statuses/dto/where.args'
import { BillboardTimelineListRelationFilter } from 'src/models/billboard-timelines/dto/where.args'
import { CampaignStatusListRelationFilter } from 'src/models/campaign-statuses/dto/where.args'
import { CampaignTimelineListRelationFilter } from 'src/models/campaign-timelines/dto/where.args'

@InputType()
export class AgentWhereUniqueInput
  implements Required<Prisma.AgentWhereUniqueInput>
{
  @Field(() => String, { nullable: true })
  uid: string
}

@InputType()
export class AgentWhereInput implements Required<Prisma.AgentWhereInput> {
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter
  @Field(() => BillboardStatusListRelationFilter, { nullable: true })
  billboardsStatuses: BillboardStatusListRelationFilter
  @Field(() => CampaignStatusListRelationFilter, { nullable: true })
  campaignsStatuses: CampaignStatusListRelationFilter
  @Field(() => BillboardTimelineListRelationFilter, { nullable: true })
  billboardTimeline: BillboardTimelineListRelationFilter
  @Field(() => CampaignTimelineListRelationFilter, { nullable: true })
  campaignTimeline: CampaignTimelineListRelationFilter

  @Field(() => [AgentWhereInput], { nullable: true })
  AND: AgentWhereInput[]
  @Field(() => [AgentWhereInput], { nullable: true })
  OR: AgentWhereInput[]
  @Field(() => [AgentWhereInput], { nullable: true })
  NOT: AgentWhereInput[]
}

@InputType()
export class AgentListRelationFilter {
  @Field(() => AgentWhereInput)
  every?: AgentWhereInput
  @Field(() => AgentWhereInput)
  some?: AgentWhereInput
  @Field(() => AgentWhereInput)
  none?: AgentWhereInput
}

@InputType()
export class AgentRelationFilter {
  @Field(() => AgentWhereInput)
  is?: AgentWhereInput
  @Field(() => AgentWhereInput)
  isNot?: AgentWhereInput
}
