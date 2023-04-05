import { Field, ObjectType } from '@nestjs/graphql'
import { Booking as BookingType } from '@prisma/client'

@ObjectType()
export class Booking implements BookingType {
  id: number
  createdAt: Date
  updatedAt: Date
  @Field(() => Number, { nullable: true })
  pricePerDay: number
  campaignId: number
  billboardId: number
}
