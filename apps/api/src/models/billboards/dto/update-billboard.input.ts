import { CreateBillboardInput } from './create-billboard.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Billboard } from '@prisma/client'

@InputType()
export class UpdateBillboardInput extends PartialType(CreateBillboardInput) {
  id: Billboard['id']
}
