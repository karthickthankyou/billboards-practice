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
  @Field(() => CampaignStatusType, { nullable: true })
  status: CampaignStatusType
  campaignId: number
  @Field(() => String, { nullable: true })
  agentId: string
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
