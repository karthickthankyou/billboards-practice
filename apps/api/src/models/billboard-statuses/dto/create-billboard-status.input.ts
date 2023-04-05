import { InputType, PickType } from '@nestjs/graphql'
import { BillboardStatus } from '../entities/billboard-status.entity'

@InputType()
export class CreateBillboardStatusInput extends PickType(
  BillboardStatus,
  ['agentId', 'billboardId', 'notes', 'status'],
  InputType,
) {}
