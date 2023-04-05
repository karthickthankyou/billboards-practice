import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AdvertiserOrderByWithRelationInput } from 'src/models/advertisers/dto/orderBy.args'
import { BillboardOrderByWithRelationInput } from 'src/models/billboards/dto/orderBy.args'

@InputType()
export class FavoriteOrderByWithRelationInput
  implements Required<Prisma.FavoriteOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  advertiserId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  billboardId: Prisma.SortOrder
  @Field(() => AdvertiserOrderByWithRelationInput, { nullable: true })
  advertiser: AdvertiserOrderByWithRelationInput
  @Field(() => BillboardOrderByWithRelationInput, { nullable: true })
  billboard: BillboardOrderByWithRelationInput
}

@InputType()
export class FavoriteOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
