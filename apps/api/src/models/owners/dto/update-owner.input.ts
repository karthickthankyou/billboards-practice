import { CreateOwnerInput } from './create-owner.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Owner } from '@prisma/client'

@InputType()
export class UpdateOwnerInput extends PartialType(CreateOwnerInput) {
  uid: Owner['uid']
}
