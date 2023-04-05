import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { BillboardsService } from './billboards.service'
import { Billboard } from './entities/billboard.entity'
import { FindManyBillboardArgs, FindUniqueBillboardArgs } from './dto/find.args'
import { CreateBillboardInput } from './dto/create-billboard.input'
import { UpdateBillboardInput } from './dto/update-billboard.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Booking } from '../bookings/entities/booking.entity'
import { Owner } from '../owners/entities/owner.entity'
import { BillboardStatus } from '../billboard-statuses/entities/billboard-status.entity'
import { BillboardTimeline } from '../billboard-timelines/entities/billboard-timeline.entity'
import { Favorite } from '../favorites/entities/favorite.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from '@billboards-org/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => Billboard)
export class BillboardsResolver {
  constructor(
    private readonly billboardsService: BillboardsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Billboard)
  createBillboard(
    @Args('createBillboardInput') args: CreateBillboardInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.ownerId)
    return this.billboardsService.create(args)
  }

  @Query(() => [Billboard], { name: 'billboards' })
  findAll(@Args() args: FindManyBillboardArgs) {
    return this.billboardsService.findAll(args)
  }

  @Query(() => Billboard, { name: 'billboard' })
  findOne(@Args() args: FindUniqueBillboardArgs) {
    return this.billboardsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Billboard)
  updateBillboard(
    @Args('updateBillboardInput') args: UpdateBillboardInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.ownerId)
    return this.billboardsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Billboard)
  async removeBillboard(
    @Args() args: FindUniqueBillboardArgs,
    @GetUser() user: GetUserType,
  ) {
    const billboard = await this.prisma.billboard.findUnique(args)
    checkRowLevelPermission(user, billboard.ownerId)

    return this.billboardsService.remove(args)
  }

  @ResolveField(() => Owner)
  owner(@Parent() billboard: Billboard) {
    return this.prisma.owner.findUnique({
      where: { uid: billboard.ownerId },
    })
  }

  @ResolveField(() => BillboardStatus)
  billboardStatus(@Parent() billboard: Billboard) {
    return this.prisma.billboardStatus.findUnique({
      where: { billboardId: billboard.id },
    })
  }

  @AllowAuthenticated()
  @ResolveField(() => [Booking])
  bookings(@Parent() billboard: Billboard, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, billboard.ownerId)

    return this.prisma.booking.findMany({
      where: { billboardId: billboard.id },
    })
  }

  @AllowAuthenticated()
  @ResolveField(() => [BillboardTimeline])
  billboardTimeline(
    @Parent() billboard: Billboard,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, billboard.ownerId)

    return this.prisma.billboardTimeline.findMany({
      where: { billboardId: billboard.id },
    })
  }

  @AllowAuthenticated()
  @ResolveField(() => [Favorite])
  favorites(@Parent() billboard: Billboard, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, billboard.ownerId)

    return this.prisma.favorite.findMany({
      where: { billboardId: billboard.id },
    })
  }
}
