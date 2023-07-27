import { Field, Float, ObjectType, registerEnumType } from '@nestjs/graphql'
import { BillboardType, Billboard as BillboardObjectType } from '@prisma/client'

registerEnumType(BillboardType, {
  name: 'BillboardType',
})

@ObjectType()
export class Billboard implements BillboardObjectType {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
  @Field(() => Float)
  lat: number
  @Field(() => Float)
  lng: number
  @Field(() => Float)
  height: number
  @Field(() => Float)
  width: number
  @Field(() => Float, { nullable: true })
  pricePerDay: number
  @Field(() => Number, { nullable: true })
  impressionsPerDay: number
  @Field(() => Number, { nullable: true })
  minBookingDays: number
  @Field(() => String, { nullable: true })
  address: string
  @Field(() => [String], { nullable: true })
  images: string[]
  @Field(() => BillboardType)
  type: BillboardType
  ownerId: string
  @Field(() => Number, { nullable: true })
  angle: number
  @Field(() => Number, { nullable: true })
  elevation: number
}
