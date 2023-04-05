import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { CampaignOrderByWithRelationInput } from './orderBy.args'
import { CampaignWhereInput, CampaignWhereUniqueInput } from './where.args'

registerEnumType(Prisma.CampaignScalarFieldEnum, {
  name: 'CampaignScalarFieldEnum',
})

@ArgsType()
export class FindManyCampaignArgs
  implements Required<Omit<Prisma.CampaignFindManyArgs, 'include' | 'select'>>
{
  @Field(() => CampaignWhereInput, { nullable: true })
  where: CampaignWhereInput
  @Field(() => [CampaignOrderByWithRelationInput], { nullable: true })
  orderBy: CampaignOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.CampaignScalarFieldEnum], { nullable: true })
  distinct: Prisma.CampaignScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueCampaignArgs {
  @Field({ nullable: true })
  where: CampaignWhereUniqueInput
}
