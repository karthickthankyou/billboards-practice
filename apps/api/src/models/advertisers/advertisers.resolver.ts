import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { AdvertisersService } from './advertisers.service'
import { Advertiser } from './entities/advertiser.entity'
import {
  FindManyAdvertiserArgs,
  FindUniqueAdvertiserArgs,
} from './dto/find.args'
import { CreateAdvertiserInput } from './dto/create-advertiser.input'
import { UpdateAdvertiserInput } from './dto/update-advertiser.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { Campaign } from '../campaigns/entities/campaign.entity'
import { GetUserType } from '@billboards-org/types'
import { checkRowLevelPermission } from 'src/common/guards'
import { Favorite } from '../favorites/entities/favorite.entity'

@Resolver(() => Advertiser)
export class AdvertisersResolver {
  constructor(
    private readonly advertisersService: AdvertisersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Advertiser)
  createAdvertiser(
    @Args('createAdvertiserInput') args: CreateAdvertiserInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.advertisersService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Advertiser], { name: 'advertisers' })
  findAll(@Args() args: FindManyAdvertiserArgs) {
    return this.advertisersService.findAll(args)
  }

  @Query(() => Advertiser, { name: 'advertiser' })
  findOne(@Args() args: FindUniqueAdvertiserArgs) {
    return this.advertisersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Advertiser)
  updateAdvertiser(
    @Args('updateAdvertiserInput') args: UpdateAdvertiserInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.advertisersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Advertiser)
  removeAdvertiser(
    @Args() args: FindUniqueAdvertiserArgs,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.where.uid)

    return this.advertisersService.remove(args)
  }

  @AllowAuthenticated()
  @ResolveField(() => [Campaign])
  campaigns(@Parent() advertiser: Advertiser, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, advertiser.uid)
    return this.prisma.campaign.findMany({
      where: { advertiserId: { equals: advertiser.uid } },
    })
  }
  @AllowAuthenticated()
  @ResolveField(() => [Favorite])
  favorites(@Parent() advertiser: Advertiser, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, advertiser.uid)
    return this.prisma.favorite.findMany({
      where: { advertiserId: { equals: advertiser.uid } },
    })
  }
}
