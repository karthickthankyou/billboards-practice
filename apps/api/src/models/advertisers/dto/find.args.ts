import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { AdvertiserOrderByWithRelationInput } from './orderBy.args'
import { AdvertiserWhereInput, AdvertiserWhereUniqueInput } from './where.args'

registerEnumType(Prisma.AdvertiserScalarFieldEnum, {
  name: 'AdvertiserScalarFieldEnum',
})

@ArgsType()
export class FindManyAdvertiserArgs
  implements
    Required<Omit<Prisma.AdvertiserFindManyArgs, 'include' | 'select'>>
{
  @Field(() => AdvertiserWhereInput, { nullable: true })
  where: AdvertiserWhereInput
  @Field(() => [AdvertiserOrderByWithRelationInput], { nullable: true })
  orderBy: AdvertiserOrderByWithRelationInput[]
  @Field(() => AdvertiserWhereUniqueInput, { nullable: true })
  cursor: AdvertiserWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.AdvertiserScalarFieldEnum], { nullable: true })
  distinct: Prisma.AdvertiserScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueAdvertiserArgs {
  @Field({ nullable: true })
  where: AdvertiserWhereUniqueInput
}
