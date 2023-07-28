import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AdvertiserRelationFilter } from 'src/models/advertisers/dto/where.args'
import { BookingListRelationFilter } from 'src/models/bookings/dto/where.args'
import { CampaignStatusRelationFilter } from 'src/models/campaign-statuses/dto/where.args'
import { CampaignTimelineListRelationFilter } from 'src/models/campaign-timelines/dto/where.args'

@InputType()
export class CampaignWhereUniqueInput
  implements Required<Prisma.CampaignWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class CampaignWhereInput implements Required<Prisma.CampaignWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  totalDays: IntFilter
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  startDate: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  endDate: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  advertiserId: StringFilter
  @Field(() => AdvertiserRelationFilter, { nullable: true })
  advertiser: AdvertiserRelationFilter
  @Field(() => BookingListRelationFilter, { nullable: true })
  bookings: BookingListRelationFilter
  @Field(() => CampaignStatusRelationFilter, { nullable: true })
  status: CampaignStatusRelationFilter
  @Field(() => CampaignTimelineListRelationFilter, { nullable: true })
  timeline: CampaignTimelineListRelationFilter

  @Field(() => [CampaignWhereInput], { nullable: true })
  AND: CampaignWhereInput[]
  @Field(() => [CampaignWhereInput], { nullable: true })
  OR: CampaignWhereInput[]
  @Field(() => [CampaignWhereInput], { nullable: true })
  NOT: CampaignWhereInput[]
}

@InputType()
export class CampaignListRelationFilter {
  @Field(() => CampaignWhereInput)
  every?: CampaignWhereInput
  @Field(() => CampaignWhereInput)
  some?: CampaignWhereInput
  @Field(() => CampaignWhereInput)
  none?: CampaignWhereInput
}

@InputType()
export class CampaignRelationFilter {
  @Field(() => CampaignWhereInput)
  is?: CampaignWhereInput
  @Field(() => CampaignWhereInput)
  isNot?: CampaignWhereInput
}
