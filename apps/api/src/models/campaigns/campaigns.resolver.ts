import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CampaignsService } from './campaigns.service'
import { Campaign } from './entities/campaign.entity'
import { FindManyCampaignArgs, FindUniqueCampaignArgs } from './dto/find.args'
import { CreateCampaignInput } from './dto/create-campaign.input'
import { UpdateCampaignInput } from './dto/update-campaign.input'

@Resolver(() => Campaign)
export class CampaignsResolver {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Mutation(() => Campaign)
  createCampaign(@Args('createCampaignInput') args: CreateCampaignInput) {
    return this.campaignsService.create(args)
  }

  @Query(() => [Campaign], { name: 'campaigns' })
  findAll(@Args() args: FindManyCampaignArgs) {
    return this.campaignsService.findAll(args)
  }

  @Query(() => Campaign, { name: 'campaign' })
  findOne(@Args() args: FindUniqueCampaignArgs) {
    return this.campaignsService.findOne(args)
  }

  @Mutation(() => Campaign)
  updateCampaign(@Args('updateCampaignInput') args: UpdateCampaignInput) {
    return this.campaignsService.update(args)
  }

  @Mutation(() => Campaign)
  removeCampaign(@Args() args: FindUniqueCampaignArgs) {
    return this.campaignsService.remove(args)
  }
}
