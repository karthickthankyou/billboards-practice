import { InputType, PickType } from '@nestjs/graphql'
import { BillboardTimeline } from '../entities/billboard-timeline.entity'

@InputType()
export class CreateBillboardTimelineInput extends PickType(
  BillboardTimeline,
  ['agentId', 'billboardId', 'notes', 'status'],
  InputType,
) {}
