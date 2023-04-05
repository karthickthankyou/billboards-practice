import { CreateBillboardStatusInput } from './create-billboard-status.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { BillboardStatus } from '@prisma/client'

@InputType()
export class UpdateBillboardStatusInput extends PartialType(
  CreateBillboardStatusInput,
) {
  billboardId: BillboardStatus['billboardId']
}
