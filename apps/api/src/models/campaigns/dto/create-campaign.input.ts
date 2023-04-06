import { Field, InputType, PickType } from '@nestjs/graphql'
import { Campaign } from '../entities/campaign.entity'
import { ConnectOnlyBillboardInput } from 'src/models/billboards/dto/create-billboard.input'

@InputType()
export class CreateCampaignInput extends PickType(
  Campaign,
  ['advertiserId', 'endDate', 'name', 'startDate'],
  InputType,
) {
  @Field(() => [BookingWithInCampaign])
  bookings: BookingWithInCampaign[]
}

@InputType()
export class BookingWithInCampaign {
  billboard: ConnectOnlyBillboardInput
  pricePerDay: number
}
