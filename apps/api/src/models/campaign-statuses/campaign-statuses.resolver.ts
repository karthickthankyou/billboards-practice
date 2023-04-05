import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { CampaignStatusesService } from './campaign-statuses.service'
import { CampaignStatus } from './entities/campaign-status.entity'
import {
  FindManyCampaignStatusArgs,
  FindUniqueCampaignStatusArgs,
} from './dto/find.args'
import { CreateCampaignStatusInput } from './dto/create-campaign-status.input'
import { UpdateCampaignStatusInput } from './dto/update-campaign-status.input'
import { Campaign } from '../campaigns/entities/campaign.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Agent } from '../agents/entities/agent.entity'
import { CampaignTimeline } from '../campaign-timelines/entities/campaign-timeline.entity'
import { AllowAuthenticated } from 'src/common/decorators/auth/auth.decorator'

@Resolver(() => CampaignStatus)
export class CampaignStatusesResolver {
  constructor(
    private readonly campaignStatusesService: CampaignStatusesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin', 'agent')
  @Mutation(() => CampaignStatus)
  createCampaignStatus(
    @Args('createCampaignStatusInput') args: CreateCampaignStatusInput,
  ) {
    return this.campaignStatusesService.create(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Query(() => [CampaignStatus], { name: 'campaignStatuses' })
  findAll(@Args() args: FindManyCampaignStatusArgs) {
    return this.campaignStatusesService.findAll(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Query(() => CampaignStatus, { name: 'campaignStatus' })
  findOne(@Args() args: FindUniqueCampaignStatusArgs) {
    return this.campaignStatusesService.findOne(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Mutation(() => CampaignStatus)
  updateCampaignStatus(
    @Args('updateCampaignStatusInput') args: UpdateCampaignStatusInput,
  ) {
    return this.campaignStatusesService.update(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Mutation(() => CampaignStatus)
  removeCampaignStatus(@Args() args: FindUniqueCampaignStatusArgs) {
    return this.campaignStatusesService.remove(args)
  }

  @ResolveField(() => Campaign)
  campaign(@Parent() campaignStatus: CampaignStatus) {
    return this.prisma.campaign.findUnique({
      where: { id: campaignStatus.campaignId },
    })
  }

  @ResolveField(() => Agent)
  agent(@Parent() campaignStatus: CampaignStatus) {
    return this.prisma.agent.findUnique({
      where: { uid: campaignStatus.agentId },
    })
  }

  @ResolveField(() => [CampaignTimeline])
  campaignTimeline(@Parent() campaignStatus: CampaignStatus) {
    return this.prisma.campaignTimeline.findMany({
      where: { campaignId: campaignStatus.campaignId },
    })
  }
}
