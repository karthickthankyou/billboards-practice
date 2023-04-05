import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
} from 'src/common/dtos/common.input'
import { BillboardRelationFilter } from 'src/models/billboards/dto/where.args'
import { CampaignRelationFilter } from 'src/models/campaigns/dto/where.args'

@InputType()
export class BookingWhereUniqueInput
  implements Required<Prisma.BookingWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class BookingWhereInput implements Required<Prisma.BookingWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => FloatFilter, { nullable: true })
  pricePerDay: FloatFilter
  @Field(() => IntFilter, { nullable: true })
  campaignId: IntFilter
  @Field(() => IntFilter, { nullable: true })
  billboardId: IntFilter
  @Field(() => CampaignRelationFilter, { nullable: true })
  campaign: CampaignRelationFilter
  @Field(() => BillboardRelationFilter, { nullable: true })
  billboard: BillboardRelationFilter

  @Field(() => [BookingWhereInput], { nullable: true })
  AND: BookingWhereInput[]
  @Field(() => [BookingWhereInput], { nullable: true })
  OR: BookingWhereInput[]
  @Field(() => [BookingWhereInput], { nullable: true })
  NOT: BookingWhereInput[]
}

@InputType()
export class BookingListRelationFilter {
  @Field(() => BookingWhereInput)
  every?: BookingWhereInput
  @Field(() => BookingWhereInput)
  some?: BookingWhereInput
  @Field(() => BookingWhereInput)
  none?: BookingWhereInput
}

@InputType()
export class BookingRelationFilter {
  @Field(() => BookingWhereInput)
  is?: BookingWhereInput
  @Field(() => BookingWhereInput)
  isNot?: BookingWhereInput
}
