import { InputType, PickType } from '@nestjs/graphql'
import { Booking } from '../entities/booking.entity'

@InputType()
export class CreateBookingInput extends PickType(
  Booking,
  ['billboardId', 'campaignId', 'pricePerDay'],
  InputType,
) {}
