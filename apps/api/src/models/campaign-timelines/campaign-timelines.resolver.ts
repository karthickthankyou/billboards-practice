import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { CampaignTimelinesService } from './campaign-timelines.service'
import { CampaignTimeline } from './entities/campaign-timeline.entity'
import {
  FindManyCampaignTimelineArgs,
  FindUniqueCampaignTimelineArgs,
} from './dto/find.args'
import { CreateCampaignTimelineInput } from './dto/create-campaign-timeline.input'
import { UpdateCampaignTimelineInput } from './dto/update-campaign-timeline.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Agent } from '../agents/entities/agent.entity'
import { Campaign } from '../campaigns/entities/campaign.entity'
import { CampaignStatus } from '../campaign-statuses/entities/campaign-status.entity'
import { AllowAuthenticated } from 'src/common/decorators/auth/auth.decorator'

@Resolver(() => CampaignTimeline)
export class CampaignTimelinesResolver {
  constructor(
    private readonly campaignTimelinesService: CampaignTimelinesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin', 'agent')
  @Mutation(() => CampaignTimeline)
  createCampaignTimeline(
    @Args('createCampaignTimelineInput') args: CreateCampaignTimelineInput,
  ) {
    return this.campaignTimelinesService.create(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Query(() => [CampaignTimeline], { name: 'campaignTimelines' })
  findAll(@Args() args: FindManyCampaignTimelineArgs) {
    return this.campaignTimelinesService.findAll(args)
  }

  @Query(() => CampaignTimeline, { name: 'campaignTimeline' })
  findOne(@Args() args: FindUniqueCampaignTimelineArgs) {
    return this.campaignTimelinesService.findOne(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Mutation(() => CampaignTimeline)
  updateCampaignTimeline(
    @Args('updateCampaignTimelineInput') args: UpdateCampaignTimelineInput,
  ) {
    return this.campaignTimelinesService.update(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Mutation(() => CampaignTimeline)
  removeCampaignTimeline(@Args() args: FindUniqueCampaignTimelineArgs) {
    return this.campaignTimelinesService.remove(args)
  }

  @ResolveField(() => Campaign, { nullable: true })
  campaign(@Parent() campaignTimeline: CampaignTimeline) {
    return this.prisma.campaign.findUnique({
      where: { id: campaignTimeline.campaignId },
    })
  }

  @ResolveField(() => Agent, { nullable: true })
  agent(@Parent() campaignTimeline: CampaignTimeline) {
    return this.prisma.agent.findUnique({
      where: { uid: campaignTimeline.agentId },
    })
  }

  @ResolveField(() => CampaignStatus, { nullable: true })
  campaignStatus(@Parent() campaignTimeline: CampaignTimeline) {
    return this.prisma.campaignStatus.findUnique({
      where: { campaignId: campaignTimeline.campaignId },
    })
  }
}
