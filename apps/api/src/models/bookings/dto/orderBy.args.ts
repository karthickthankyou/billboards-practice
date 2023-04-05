import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BillboardOrderByWithRelationInput } from 'src/models/billboards/dto/orderBy.args'
import { CampaignOrderByWithRelationInput } from 'src/models/campaigns/dto/orderBy.args'

@InputType()
export class BookingOrderByWithRelationInput
  implements Required<Prisma.BookingOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  pricePerDay: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  campaignId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  billboardId: Prisma.SortOrder
  @Field(() => CampaignOrderByWithRelationInput, { nullable: true })
  campaign: CampaignOrderByWithRelationInput
  @Field(() => BillboardOrderByWithRelationInput, { nullable: true })
  billboard: BillboardOrderByWithRelationInput
}

@InputType()
export class BookingOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
