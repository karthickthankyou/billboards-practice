import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { CampaignsService } from './campaigns.service'
import { Campaign } from './entities/campaign.entity'
import { FindManyCampaignArgs, FindUniqueCampaignArgs } from './dto/find.args'
import { CreateCampaignInput } from './dto/create-campaign.input'
import { UpdateCampaignInput } from './dto/update-campaign.input'
import { Advertiser } from '../advertisers/entities/advertiser.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CampaignStatus } from '../campaign-statuses/entities/campaign-status.entity'
import { Booking } from '../bookings/entities/booking.entity'
import { CampaignTimeline } from '../campaign-timelines/entities/campaign-timeline.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { checkRowLevelPermission } from 'src/common/guards'
import { GetUserType } from '@billboards-org/types'
import { CampaignStatusType } from '@prisma/client'
import { AggregateCountOutput } from '../billboards/dto/count.output'
import { CampaignWhereInput } from './dto/where.args'

@Resolver(() => Campaign)
export class CampaignsResolver {
  constructor(
    private readonly campaignsService: CampaignsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Campaign)
  async createCampaign(
    @Args('createCampaignInput') args: CreateCampaignInput,
    @GetUser() user: GetUserType,
  ) {
    const { advertiserId, bookings, endDate, name, startDate } = args
    checkRowLevelPermission(user, args.advertiserId)
    const campaign = await this.prisma.campaign.create({
      data: {
        advertiserId,
        bookings: { create: bookings },
        endDate,
        name,
        startDate,
        status: {
          create: { status: CampaignStatusType.NEW },
        },
        timeline: {
          create: { notes: 'Generated by admin' },
        },
      },
    })

    return campaign
  }

  @AllowAuthenticated()
  @Query(() => [Campaign], { name: 'campaigns' })
  findAll(@Args() args: FindManyCampaignArgs) {
    return this.campaignsService.findAll(args)
  }

  @Query(() => AggregateCountOutput, { name: 'campaignAggregate' })
  async campaignAggregate(
    @Args('CampaignWhereInput', { nullable: true }) where: CampaignWhereInput,
  ) {
    const campaignCount = await this.prisma.campaign.aggregate({
      _count: { _all: true },
      where,
    })

    return { count: campaignCount._count._all }
  }

  @AllowAuthenticated()
  @Query(() => Campaign, { name: 'campaign' })
  async findOne(
    @Args() args: FindUniqueCampaignArgs,
    @GetUser() user: GetUserType,
  ) {
    const campaign = await this.campaignsService.findOne(args)
    checkRowLevelPermission(user, campaign.advertiserId)
    return campaign
  }

  @AllowAuthenticated()
  @Mutation(() => Campaign)
  async updateCampaign(
    @Args('updateCampaignInput') args: UpdateCampaignInput,
    @GetUser() user: GetUserType,
  ) {
    const campaign = await this.campaignsService.findOne({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, campaign.advertiserId)
    return this.campaignsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Campaign)
  async removeCampaign(
    @Args() args: FindUniqueCampaignArgs,
    @GetUser() user: GetUserType,
  ) {
    const campaign = await this.campaignsService.findOne(args)
    checkRowLevelPermission(user, campaign.advertiserId)
    return this.campaignsService.remove(args)
  }

  @ResolveField(() => Advertiser)
  advertiser(@Parent() campaign: Campaign) {
    return this.prisma.advertiser.findUnique({
      where: { uid: campaign.advertiserId },
    })
  }
  @ResolveField(() => CampaignStatus)
  status(@Parent() campaign: Campaign) {
    return this.prisma.campaignStatus.findUnique({
      where: { campaignId: campaign.id },
    })
  }
  @ResolveField(() => [Booking])
  bookings(@Parent() campaign: Campaign) {
    return this.prisma.booking.findMany({
      where: { campaignId: campaign.id },
    })
  }
  @ResolveField(() => [CampaignTimeline])
  campaignTimeline(@Parent() campaign: Campaign) {
    return this.prisma.campaignTimeline.findMany({
      where: { campaignId: campaign.id },
    })
  }
}
