import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CampaignTimelinesService } from './campaign-timelines.service'
import { CampaignTimeline } from './entities/campaign-timeline.entity'
import {
  FindManyCampaignTimelineArgs,
  FindUniqueCampaignTimelineArgs,
} from './dto/find.args'
import { CreateCampaignTimelineInput } from './dto/create-campaign-timeline.input'
import { UpdateCampaignTimelineInput } from './dto/update-campaign-timeline.input'

@Resolver(() => CampaignTimeline)
export class CampaignTimelinesResolver {
  constructor(
    private readonly campaignTimelinesService: CampaignTimelinesService,
  ) {}

  @Mutation(() => CampaignTimeline)
  createCampaignTimeline(
    @Args('createCampaignTimelineInput') args: CreateCampaignTimelineInput,
  ) {
    return this.campaignTimelinesService.create(args)
  }

  @Query(() => [CampaignTimeline], { name: 'campaignTimelines' })
  findAll(@Args() args: FindManyCampaignTimelineArgs) {
    return this.campaignTimelinesService.findAll(args)
  }

  @Query(() => CampaignTimeline, { name: 'campaignTimeline' })
  findOne(@Args() args: FindUniqueCampaignTimelineArgs) {
    return this.campaignTimelinesService.findOne(args)
  }

  @Mutation(() => CampaignTimeline)
  updateCampaignTimeline(
    @Args('updateCampaignTimelineInput') args: UpdateCampaignTimelineInput,
  ) {
    return this.campaignTimelinesService.update(args)
  }

  @Mutation(() => CampaignTimeline)
  removeCampaignTimeline(@Args() args: FindUniqueCampaignTimelineArgs) {
    return this.campaignTimelinesService.remove(args)
  }
}
