import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CampaignOrderByRelationAggregateInput } from 'src/models/campaigns/dto/orderBy.args'
import { FavoriteOrderByRelationAggregateInput } from 'src/models/favorites/dto/orderBy.args'

@InputType()
export class AdvertiserOrderByWithRelationInput
  implements Required<Prisma.AdvertiserOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder
  @Field(() => CampaignOrderByRelationAggregateInput, { nullable: true })
  campaigns: CampaignOrderByRelationAggregateInput
  @Field(() => FavoriteOrderByRelationAggregateInput, { nullable: true })
  favorites: FavoriteOrderByRelationAggregateInput
}

@InputType()
export class AdvertiserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
