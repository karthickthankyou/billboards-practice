import { Field, Float, InputType } from '@nestjs/graphql'

@InputType()
export class DateFilterInput {
  @Field(() => String)
  startDate: string

  @Field(() => String)
  endDate: string
}

@InputType()
export class LocationFilterInput {
  @Field(() => Float)
  nw_lat: number

  @Field(() => Float)
  nw_lng: number

  @Field(() => Float)
  se_lat: number

  @Field(() => Float)
  se_lng: number
}
