import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BillboardStatusOrderByWithRelationInput } from 'src/models/billboard-statuses/dto/orderBy.args'
import { BillboardTimelineOrderByRelationAggregateInput } from 'src/models/billboard-timelines/dto/orderBy.args'
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/dto/orderBy.args'
import { FavoriteOrderByRelationAggregateInput } from 'src/models/favorites/dto/orderBy.args'
import { OwnerOrderByWithRelationInput } from 'src/models/owners/dto/orderBy.args'

@InputType()
export class BillboardOrderByWithRelationInput
  implements Required<Prisma.BillboardOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  lat: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  lng: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  height: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  width: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  pricePerDay: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  impressionsPerDay: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  minBookingDays: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  address: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  images: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  type: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  ownerId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  angle: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  elevation: Prisma.SortOrder
  @Field(() => OwnerOrderByWithRelationInput, { nullable: true })
  owner: OwnerOrderByWithRelationInput
  @Field(() => BookingOrderByRelationAggregateInput, { nullable: true })
  bookings: BookingOrderByRelationAggregateInput
  @Field(() => BillboardStatusOrderByWithRelationInput, { nullable: true })
  status: BillboardStatusOrderByWithRelationInput
  @Field(() => BillboardTimelineOrderByRelationAggregateInput, {
    nullable: true,
  })
  billboardTimeline: BillboardTimelineOrderByRelationAggregateInput
  @Field(() => FavoriteOrderByRelationAggregateInput, { nullable: true })
  favorites: FavoriteOrderByRelationAggregateInput
}

@InputType()
export class BillboardOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
