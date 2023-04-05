import { ObjectType } from '@nestjs/graphql'
import { Advertiser as AdvertiserType } from '@prisma/client'

@ObjectType()
export class Advertiser implements AdvertiserType {
  uid: string
  createdAt: Date
  updatedAt: Date
  name: string
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
