import { ObjectType } from '@nestjs/graphql'
import { Campaign as CampaignType } from '@prisma/client'

@ObjectType()
export class Campaign implements CampaignType {
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  startDate: Date
  endDate: Date
  advertiserId: string
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
