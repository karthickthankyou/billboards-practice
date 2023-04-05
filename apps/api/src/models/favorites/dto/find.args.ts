import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { FavoriteOrderByWithRelationInput } from './orderBy.args'
import { FavoriteWhereInput, FavoriteWhereUniqueInput } from './where.args'

registerEnumType(Prisma.FavoriteScalarFieldEnum, {
  name: 'FavoriteScalarFieldEnum',
})

@ArgsType()
export class FindManyFavoriteArgs
  implements Required<Omit<Prisma.FavoriteFindManyArgs, 'include' | 'select'>>
{
  @Field(() => FavoriteWhereInput, { nullable: true })
  where: FavoriteWhereInput
  @Field(() => [FavoriteOrderByWithRelationInput], { nullable: true })
  orderBy: FavoriteOrderByWithRelationInput[]
  @Field(() => FavoriteWhereUniqueInput, { nullable: true })
  cursor: FavoriteWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.FavoriteScalarFieldEnum], { nullable: true })
  distinct: Prisma.FavoriteScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueFavoriteArgs {
  @Field({ nullable: true })
  where: FavoriteWhereUniqueInput
}
