import { ObjectType } from '@nestjs/graphql'
import { Owner as OwnerType } from '@prisma/client'

@ObjectType()
export class Owner implements OwnerType {
  uid: string
  createdAt: Date
  updatedAt: Date
  name: string
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
