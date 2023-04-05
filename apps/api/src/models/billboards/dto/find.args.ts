import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { BillboardOrderByWithRelationInput } from './orderBy.args'
import { BillboardWhereInput, BillboardWhereUniqueInput } from './where.args'

registerEnumType(Prisma.BillboardScalarFieldEnum, {
  name: 'BillboardScalarFieldEnum',
})

@ArgsType()
export class FindManyBillboardArgs
  implements Required<Omit<Prisma.BillboardFindManyArgs, 'include' | 'select'>>
{
  @Field(() => BillboardWhereInput, { nullable: true })
  where: BillboardWhereInput
  @Field(() => [BillboardOrderByWithRelationInput], { nullable: true })
  orderBy: BillboardOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.BillboardScalarFieldEnum], { nullable: true })
  distinct: Prisma.BillboardScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueBillboardArgs {
  @Field({ nullable: true })
  where: BillboardWhereUniqueInput
}
