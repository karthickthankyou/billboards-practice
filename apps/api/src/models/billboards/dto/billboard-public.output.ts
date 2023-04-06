import { ObjectType, PickType } from '@nestjs/graphql'
import { Billboard } from '../entities/billboard.entity'

@ObjectType()
export class BillboardPublic extends PickType(Billboard, [
  'lat',
  'lng',
  'height',
  'width',
  'images',
  'impressionsPerDay',
  'id',
  'minBookingDays',
  'type',
  'angle',
  'elevation',
  'pricePerDay',
]) {}
