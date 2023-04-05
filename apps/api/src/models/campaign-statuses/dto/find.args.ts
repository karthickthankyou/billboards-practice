import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CampaignStatusOrderByWithRelationInput } from './orderBy.args'
import {
  CampaignStatusWhereInput,
  CampaignStatusWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.CampaignStatusScalarFieldEnum, {
  name: 'CampaignStatusScalarFieldEnum',
})

@ArgsType()
export class FindManyCampaignStatusArgs
  implements
    Required<Omit<Prisma.CampaignStatusFindManyArgs, 'include' | 'select'>>
{
  @Field(() => CampaignStatusWhereInput, { nullable: true })
  where: CampaignStatusWhereInput
  @Field(() => [CampaignStatusOrderByWithRelationInput], { nullable: true })
  orderBy: CampaignStatusOrderByWithRelationInput[]
  @Field(() => CampaignStatusWhereUniqueInput, { nullable: true })
  cursor: CampaignStatusWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.CampaignStatusScalarFieldEnum], { nullable: true })
  distinct: Prisma.CampaignStatusScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueCampaignStatusArgs {
  @Field({ nullable: true })
  where: CampaignStatusWhereUniqueInput
}
