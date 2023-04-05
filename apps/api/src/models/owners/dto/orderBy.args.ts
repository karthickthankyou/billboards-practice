import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BillboardOrderByRelationAggregateInput } from 'src/models/billboards/dto/orderBy.args'

@InputType()
export class OwnerOrderByWithRelationInput
  implements Required<Prisma.OwnerOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder
  @Field(() => BillboardOrderByRelationAggregateInput, { nullable: true })
  billboards: BillboardOrderByRelationAggregateInput
}

@InputType()
export class OwnerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
