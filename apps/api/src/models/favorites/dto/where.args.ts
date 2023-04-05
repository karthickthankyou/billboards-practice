import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AdvertiserRelationFilter } from 'src/models/advertisers/dto/where.args'
import { BillboardRelationFilter } from 'src/models/billboards/dto/where.args'

@InputType()
export class FavoriteUnique
  implements Prisma.FavoriteAdvertiserIdBillboardIdCompoundUniqueInput
{
  advertiserId: string
  billboardId: number
}

@InputType()
export class FavoriteWhereUniqueInput
  implements Required<Prisma.FavoriteWhereUniqueInput>
{
  @Field(() => FavoriteUnique, { nullable: true })
  advertiserId_billboardId: FavoriteUnique
}

@InputType()
export class FavoriteWhereInput implements Required<Prisma.FavoriteWhereInput> {
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  advertiserId: StringFilter
  @Field(() => IntFilter, { nullable: true })
  billboardId: IntFilter
  @Field(() => AdvertiserRelationFilter, { nullable: true })
  advertiser: AdvertiserRelationFilter
  @Field(() => BillboardRelationFilter, { nullable: true })
  billboard: BillboardRelationFilter

  @Field(() => [FavoriteWhereInput], { nullable: true })
  AND: FavoriteWhereInput[]
  @Field(() => [FavoriteWhereInput], { nullable: true })
  OR: FavoriteWhereInput[]
  @Field(() => [FavoriteWhereInput], { nullable: true })
  NOT: FavoriteWhereInput[]
}

@InputType()
export class FavoriteListRelationFilter {
  @Field(() => FavoriteWhereInput)
  every?: FavoriteWhereInput
  @Field(() => FavoriteWhereInput)
  some?: FavoriteWhereInput
  @Field(() => FavoriteWhereInput)
  none?: FavoriteWhereInput
}

@InputType()
export class FavoriteRelationFilter {
  @Field(() => FavoriteWhereInput)
  is?: FavoriteWhereInput
  @Field(() => FavoriteWhereInput)
  isNot?: FavoriteWhereInput
}
