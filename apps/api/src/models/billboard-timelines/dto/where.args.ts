import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AgentRelationFilter } from 'src/models/agents/dto/where.args'
import { EnumBillboardStatusTypeFilter } from 'src/models/billboard-statuses/dto/where.args'
import { BillboardRelationFilter } from 'src/models/billboards/dto/where.args'

@InputType()
export class BillboardTimelineWhereUniqueInput
  implements Required<Prisma.BillboardTimelineWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class BillboardTimelineWhereInput
  implements Required<Prisma.BillboardTimelineWhereInput>
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
  billboardId: IntFilter
  @Field(() => StringFilter, { nullable: true })
  agentId: StringFilter
  @Field(() => EnumBillboardStatusTypeFilter, { nullable: true })
  status: EnumBillboardStatusTypeFilter
  @Field(() => BillboardRelationFilter, { nullable: true })
  billboard: BillboardRelationFilter
  @Field(() => AgentRelationFilter, { nullable: true })
  agent: AgentRelationFilter

  @Field(() => [BillboardTimelineWhereInput], { nullable: true })
  AND: BillboardTimelineWhereInput[]
  @Field(() => [BillboardTimelineWhereInput], { nullable: true })
  OR: BillboardTimelineWhereInput[]
  @Field(() => [BillboardTimelineWhereInput], { nullable: true })
  NOT: BillboardTimelineWhereInput[]
}

@InputType()
export class BillboardTimelineListRelationFilter {
  @Field(() => BillboardTimelineWhereInput)
  every?: BillboardTimelineWhereInput
  @Field(() => BillboardTimelineWhereInput)
  some?: BillboardTimelineWhereInput
  @Field(() => BillboardTimelineWhereInput)
  none?: BillboardTimelineWhereInput
}

@InputType()
export class BillboardTimelineRelationFilter {
  @Field(() => BillboardTimelineWhereInput)
  is?: BillboardTimelineWhereInput
  @Field(() => BillboardTimelineWhereInput)
  isNot?: BillboardTimelineWhereInput
}
