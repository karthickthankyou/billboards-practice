import { Field, ObjectType } from '@nestjs/graphql'
import {
  BillboardStatusType,
  BillboardTimeline as BillboardTimelineType,
} from '@prisma/client'

@ObjectType()
export class BillboardTimeline implements BillboardTimelineType {
  id: number
  createdAt: Date
  updatedAt: Date
  @Field(() => String, { nullable: true })
  notes: string
  billboardId: number
  @Field(() => String, { nullable: true })
  agentId: string
  @Field(() => BillboardStatusType, { nullable: true })
  status: BillboardStatusType
}
