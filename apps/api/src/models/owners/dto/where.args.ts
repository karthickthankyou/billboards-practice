import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, StringFilter } from 'src/common/dtos/common.input'
import { BillboardListRelationFilter } from 'src/models/billboards/dto/where.args'

@InputType()
export class OwnerWhereUniqueInput
  implements Required<Prisma.OwnerWhereUniqueInput>
{
  @Field(() => String, { nullable: true })
  uid: string
}

@InputType()
export class OwnerWhereInput implements Required<Prisma.OwnerWhereInput> {
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter
  @Field(() => BillboardListRelationFilter, { nullable: true })
  billboards: BillboardListRelationFilter

  @Field(() => [OwnerWhereInput], { nullable: true })
  AND: OwnerWhereInput[]
  @Field(() => [OwnerWhereInput], { nullable: true })
  OR: OwnerWhereInput[]
  @Field(() => [OwnerWhereInput], { nullable: true })
  NOT: OwnerWhereInput[]
}

@InputType()
export class OwnerListRelationFilter {
  @Field(() => OwnerWhereInput)
  every?: OwnerWhereInput
  @Field(() => OwnerWhereInput)
  some?: OwnerWhereInput
  @Field(() => OwnerWhereInput)
  none?: OwnerWhereInput
}

@InputType()
export class OwnerRelationFilter {
  @Field(() => OwnerWhereInput)
  is?: OwnerWhereInput
  @Field(() => OwnerWhereInput)
  isNot?: OwnerWhereInput
}
