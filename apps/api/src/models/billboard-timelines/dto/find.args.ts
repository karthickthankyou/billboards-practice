import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { BillboardTimelineOrderByWithRelationInput } from './orderBy.args'
import {
  BillboardTimelineWhereInput,
  BillboardTimelineWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.BillboardTimelineScalarFieldEnum, {
  name: 'BillboardTimelineScalarFieldEnum',
})

@ArgsType()
export class FindManyBillboardTimelineArgs
  implements
    Required<Omit<Prisma.BillboardTimelineFindManyArgs, 'include' | 'select'>>
{
  @Field(() => BillboardTimelineWhereInput, { nullable: true })
  where: BillboardTimelineWhereInput
  @Field(() => [BillboardTimelineOrderByWithRelationInput], { nullable: true })
  orderBy: BillboardTimelineOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.BillboardTimelineScalarFieldEnum], { nullable: true })
  distinct: Prisma.BillboardTimelineScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueBillboardTimelineArgs {
  @Field({ nullable: true })
  where: BillboardTimelineWhereUniqueInput
}
