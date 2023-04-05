import { CreateBillboardTimelineInput } from './create-billboard-timeline.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { BillboardTimeline } from '@prisma/client'

@InputType()
export class UpdateBillboardTimelineInput extends PartialType(
  CreateBillboardTimelineInput,
) {
  id: BillboardTimeline['id']
}
