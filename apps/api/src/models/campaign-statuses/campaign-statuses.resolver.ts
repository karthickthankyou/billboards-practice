import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CampaignStatusesService } from './campaign-statuses.service'
import { CampaignStatus } from './entities/campaign-status.entity'
import {
  FindManyCampaignStatusArgs,
  FindUniqueCampaignStatusArgs,
} from './dto/find.args'
import { CreateCampaignStatusInput } from './dto/create-campaign-status.input'
import { UpdateCampaignStatusInput } from './dto/update-campaign-status.input'

@Resolver(() => CampaignStatus)
export class CampaignStatusesResolver {
  constructor(
    private readonly campaignStatusesService: CampaignStatusesService,
  ) {}

  @Mutation(() => CampaignStatus)
  createCampaignStatus(
    @Args('createCampaignStatusInput') args: CreateCampaignStatusInput,
  ) {
    return this.campaignStatusesService.create(args)
  }

  @Query(() => [CampaignStatus], { name: 'campaignStatuses' })
  findAll(@Args() args: FindManyCampaignStatusArgs) {
    return this.campaignStatusesService.findAll(args)
  }

  @Query(() => CampaignStatus, { name: 'campaignStatus' })
  findOne(@Args() args: FindUniqueCampaignStatusArgs) {
    return this.campaignStatusesService.findOne(args)
  }

  @Mutation(() => CampaignStatus)
  updateCampaignStatus(
    @Args('updateCampaignStatusInput') args: UpdateCampaignStatusInput,
  ) {
    return this.campaignStatusesService.update(args)
  }

  @Mutation(() => CampaignStatus)
  removeCampaignStatus(@Args() args: FindUniqueCampaignStatusArgs) {
    return this.campaignStatusesService.remove(args)
  }
}
