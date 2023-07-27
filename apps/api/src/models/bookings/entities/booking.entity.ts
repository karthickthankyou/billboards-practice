import { Field, Float, ObjectType } from '@nestjs/graphql'
import { Booking as BookingType } from '@prisma/client'

@ObjectType()
export class Booking implements BookingType {
  id: number
  createdAt: Date
  updatedAt: Date
  @Field(() => Float, { nullable: true })
  pricePerDay: number
  campaignId: number
  billboardId: number
}
