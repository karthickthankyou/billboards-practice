import { Field, InputType } from '@nestjs/graphql'
import { BillboardStatusType, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AgentRelationFilter } from 'src/models/agents/dto/where.args'
import { BillboardRelationFilter } from 'src/models/billboards/dto/where.args'

@InputType()
export class BillboardStatusWhereUniqueInput
  implements Required<Prisma.BillboardStatusWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  billboardId: number
}

@InputType()
export class EnumBillboardStatusTypeFilter {
  @Field(() => BillboardStatusType, { nullable: true })
  equals: BillboardStatusType;
  @Field(() => [BillboardStatusType], { nullable: true })
  in: BillboardStatusType[]
  @Field(() => [BillboardStatusType], { nullable: true })
  notIn: BillboardStatusType[]
  @Field(() => BillboardStatusType, { nullable: true })
  not: BillboardStatusType
}

@InputType()
export class BillboardStatusWhereInput
  implements Required<Prisma.BillboardStatusWhereInput>
{
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  notes: StringFilter
  @Field(() => EnumBillboardStatusTypeFilter, { nullable: true })
  status: EnumBillboardStatusTypeFilter
  @Field(() => IntFilter, { nullable: true })
  billboardId: IntFilter
  @Field(() => StringFilter, { nullable: true })
  agentId: StringFilter
  @Field(() => BillboardRelationFilter, { nullable: true })
  billboard: BillboardRelationFilter
  @Field(() => AgentRelationFilter, { nullable: true })
  agent: AgentRelationFilter

  @Field(() => [BillboardStatusWhereInput], { nullable: true })
  AND: BillboardStatusWhereInput[]
  @Field(() => [BillboardStatusWhereInput], { nullable: true })
  OR: BillboardStatusWhereInput[]
  @Field(() => [BillboardStatusWhereInput], { nullable: true })
  NOT: BillboardStatusWhereInput[]
}

@InputType()
export class BillboardStatusListRelationFilter {
  @Field(() => BillboardStatusWhereInput)
  every?: BillboardStatusWhereInput
  @Field(() => BillboardStatusWhereInput)
  some?: BillboardStatusWhereInput
  @Field(() => BillboardStatusWhereInput)
  none?: BillboardStatusWhereInput
}

@InputType()
export class BillboardStatusRelationFilter {
  @Field(() => BillboardStatusWhereInput)
  is?: BillboardStatusWhereInput
  @Field(() => BillboardStatusWhereInput)
  isNot?: BillboardStatusWhereInput
}
