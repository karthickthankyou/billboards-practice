import { InputType, PickType } from '@nestjs/graphql'
import { Billboard } from '../entities/billboard.entity'
import { BillboardWhereUniqueInput } from './where.args'

@InputType()
export class CreateBillboardInput extends PickType(
  Billboard,
  [
    'address',
    'angle',
    'elevation',
    'height',
    'images',
    'impressionsPerDay',
    'lat',
    'lng',
    'minBookingDays',
    'ownerId',
    'pricePerDay',
    'type',
    'width',
  ],
  InputType,
) {}

@InputType()
export class ConnectOnlyBillboardInput {
  connect: BillboardWhereUniqueInput
}
