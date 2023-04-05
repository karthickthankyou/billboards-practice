import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  BillboardStatusType,
  BillboardStatus as BillboardStatusObjectType,
} from '@prisma/client'

registerEnumType(BillboardStatusType, {
  name: 'BillboardStatusType',
})

@ObjectType()
export class BillboardStatus implements BillboardStatusObjectType {
  createdAt: Date
  updatedAt: Date
  @Field(() => String, { nullable: true })
  notes: string
  @Field(() => BillboardStatusType, { nullable: true })
  status: BillboardStatusType
  billboardId: number
  @Field(() => String, { nullable: true })
  agentId: string
}
