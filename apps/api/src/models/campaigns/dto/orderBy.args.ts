import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AdvertiserOrderByWithRelationInput } from 'src/models/advertisers/dto/orderBy.args'
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/dto/orderBy.args'
import { CampaignStatusOrderByWithRelationInput } from 'src/models/campaign-statuses/dto/orderBy.args'
import { CampaignTimelineOrderByRelationAggregateInput } from 'src/models/campaign-timelines/dto/orderBy.args'

@InputType()
export class CampaignOrderByWithRelationInput
  implements Required<Prisma.CampaignOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  totalDays: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  startDate: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  endDate: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  advertiserId: Prisma.SortOrder
  @Field(() => AdvertiserOrderByWithRelationInput, { nullable: true })
  advertiser: AdvertiserOrderByWithRelationInput
  @Field(() => BookingOrderByRelationAggregateInput, { nullable: true })
  bookings: BookingOrderByRelationAggregateInput
  @Field(() => CampaignStatusOrderByWithRelationInput, { nullable: true })
  status: CampaignStatusOrderByWithRelationInput
  @Field(() => CampaignTimelineOrderByRelationAggregateInput, {
    nullable: true,
  })
  timeline: CampaignTimelineOrderByRelationAggregateInput
}

@InputType()
export class CampaignOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
