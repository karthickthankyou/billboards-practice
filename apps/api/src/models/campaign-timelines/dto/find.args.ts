import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { CampaignTimelineOrderByWithRelationInput } from './orderBy.args'
import {
  CampaignTimelineWhereInput,
  CampaignTimelineWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.CampaignTimelineScalarFieldEnum, {
  name: 'CampaignTimelineScalarFieldEnum',
})

@ArgsType()
export class FindManyCampaignTimelineArgs
  implements
    Required<Omit<Prisma.CampaignTimelineFindManyArgs, 'include' | 'select'>>
{
  @Field(() => CampaignTimelineWhereInput, { nullable: true })
  where: CampaignTimelineWhereInput
  @Field(() => [CampaignTimelineOrderByWithRelationInput], { nullable: true })
  orderBy: CampaignTimelineOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.CampaignTimelineScalarFieldEnum], { nullable: true })
  distinct: Prisma.CampaignTimelineScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueCampaignTimelineArgs {
  @Field({ nullable: true })
  where: CampaignTimelineWhereUniqueInput
}
