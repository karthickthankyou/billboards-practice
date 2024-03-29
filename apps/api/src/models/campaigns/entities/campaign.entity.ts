import { ObjectType } from '@nestjs/graphql'
import { Campaign as CampaignType } from '@prisma/client'

@ObjectType()
export class Campaign implements CampaignType {
  totalDays: number
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  startDate: Date
  endDate: Date
  advertiserId: string
}
