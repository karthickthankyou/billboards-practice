import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AgentOrderByWithRelationInput } from 'src/models/agents/dto/orderBy.args'
import { BillboardOrderByWithRelationInput } from 'src/models/billboards/dto/orderBy.args'

@InputType()
export class BillboardStatusOrderByWithRelationInput
  implements Required<Prisma.BillboardStatusOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  notes: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  status: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  billboardId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  agentId: Prisma.SortOrder
  @Field(() => BillboardOrderByWithRelationInput, { nullable: true })
  billboard: BillboardOrderByWithRelationInput
  @Field(() => AgentOrderByWithRelationInput, { nullable: true })
  agent: AgentOrderByWithRelationInput
}

@InputType()
export class BillboardStatusOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
