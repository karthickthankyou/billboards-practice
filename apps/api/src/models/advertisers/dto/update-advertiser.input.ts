import { CreateAdvertiserInput } from './create-advertiser.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Advertiser } from '@prisma/client'

@InputType()
export class UpdateAdvertiserInput extends PartialType(CreateAdvertiserInput) {
  uid: Advertiser['uid']
}
