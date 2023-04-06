import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  CampaignStatusType,
  CampaignStatus as CampaignStatusObjectType,
} from '@prisma/client'

registerEnumType(CampaignStatusType, {
  name: 'CampaignStatusType',
})

@ObjectType()
export class CampaignStatus implements CampaignStatusObjectType {
  createdAt: Date
  updatedAt: Date
  @Field(() => CampaignStatusType)
  status: CampaignStatusType
  campaignId: number
  @Field(() => String, { nullable: true })
  agentId: string
}
