import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { StringFilter } from 'src/common/dtos/common.input'
import { CampaignListRelationFilter } from 'src/models/campaigns/dto/where.args'
import { FavoriteListRelationFilter } from 'src/models/favorites/dto/where.args'

@InputType()
export class AdvertiserWhereUniqueInput
  implements Required<Prisma.AdvertiserWhereUniqueInput>
{
  @Field(() => String, { nullable: true })
  uid: string
}

@InputType()
export class AdvertiserWhereInput
  implements Required<Prisma.AdvertiserWhereInput>
{
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => StringFilter, { nullable: true })
  createdAt: StringFilter
  @Field(() => StringFilter, { nullable: true })
  updatedAt: StringFilter
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter
  @Field(() => CampaignListRelationFilter, { nullable: true })
  campaigns: CampaignListRelationFilter
  @Field(() => FavoriteListRelationFilter, { nullable: true })
  favorites: FavoriteListRelationFilter

  @Field(() => [AdvertiserWhereInput], { nullable: true })
  AND: AdvertiserWhereInput[]
  @Field(() => [AdvertiserWhereInput], { nullable: true })
  OR: AdvertiserWhereInput[]
  @Field(() => [AdvertiserWhereInput], { nullable: true })
  NOT: AdvertiserWhereInput[]
}

@InputType()
export class AdvertiserListRelationFilter {
  @Field(() => AdvertiserWhereInput)
  every?: AdvertiserWhereInput
  @Field(() => AdvertiserWhereInput)
  some?: AdvertiserWhereInput
  @Field(() => AdvertiserWhereInput)
  none?: AdvertiserWhereInput
}

@InputType()
export class AdvertiserRelationFilter {
  @Field(() => AdvertiserWhereInput)
  is?: AdvertiserWhereInput
  @Field(() => AdvertiserWhereInput)
  isNot?: AdvertiserWhereInput
}
