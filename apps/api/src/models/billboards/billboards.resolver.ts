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
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/guards'
import { BillboardPublic } from './dto/billboard-public.output'
import { DateFilterInput, LocationFilterInput } from './dto/filters.input'
import { AggregateCountOutput } from './dto/count.output'
import { BillboardWhereInput } from './dto/where.args'

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
  @AllowAuthenticated()
  @Query(() => [Billboard], { name: 'myBillboards' })
  myBillboards(
    @Args() args: FindManyBillboardArgs,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.billboard.findMany({
      ...args,
      where: { ...args.where, ownerId: user.uid },
    })
  }

  @Query(() => [BillboardPublic], { name: 'searchBillboards' })
  async search(
    @Args('dateFilter', { nullable: true }) dateFilter: DateFilterInput,
    @Args('locationFilter')
    locationFilter: LocationFilterInput,
    @Args()
    { cursor, distinct, orderBy, skip, take, where }: FindManyBillboardArgs,
  ) {
    const { endDate, startDate } = dateFilter
    const { nw_lat, nw_lng, se_lat, se_lng } = locationFilter

    const days = Math.floor(
      (new Date(endDate).getTime() - new Date(startDate).getTime()) /
        (1000 * 3600 * 24),
    )

    const billboards = await this.prisma.billboard.findMany({
      cursor,
      distinct,
      orderBy,
      skip,
      take,
      where: {
        ...where,
        lat: { lte: nw_lat, gte: se_lat },
        lng: { gte: nw_lng, lte: se_lng },
        minBookingDays: { lte: days },
        status: { status: 'LIVE' },
        bookings: {
          none: {
            campaign: {
              is: {
                status: { status: 'LIVE' },
                OR: [
                  {
                    startDate: { lt: new Date(endDate) },
                    endDate: { gt: new Date(startDate) },
                  },
                  {
                    startDate: { gt: new Date(startDate) },
                    endDate: { lt: new Date(endDate) },
                  },
                ],
              },
            },
          },
        },
      },
    })

    return billboards
  }

  @Query(() => AggregateCountOutput, { name: 'billboardAggregate' })
  async billboardAggregate(
    @Args('BillboardWhereInput', { nullable: true }) where: BillboardWhereInput,
  ) {
    const productCount = await this.prisma.billboard.aggregate({
      _count: { _all: true },
      where,
    })

    return { count: productCount._count._all }
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

  @ResolveField(() => Owner, { nullable: true })
  owner(@Parent() billboard: Billboard) {
    return this.prisma.owner.findUnique({
      where: { uid: billboard.ownerId },
    })
  }

  @ResolveField(() => BillboardStatus, { nullable: true })
  status(@Parent() billboard: Billboard) {
    return this.prisma.billboardStatus.findUnique({
      where: { billboardId: billboard.id },
    })
  }

  @AllowAuthenticated()
  @ResolveField(() => [Booking], { nullable: true })
  bookings(@Parent() billboard: Billboard, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, billboard.ownerId)

    return this.prisma.booking.findMany({
      where: { billboardId: billboard.id },
    })
  }

  @AllowAuthenticated()
  @ResolveField(() => [BillboardTimeline], { nullable: true })
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
  @ResolveField(() => [Favorite], { nullable: true })
  favorites(@Parent() billboard: Billboard, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, billboard.ownerId)

    return this.prisma.favorite.findMany({
      where: { billboardId: billboard.id },
    })
  }

  @ResolveField(() => Number, { nullable: true })
  async campaignsCount(@Parent() billboard: Billboard) {
    return this.prisma.campaign.count({
      where: { bookings: { some: { billboardId: { equals: billboard.id } } } },
    })
  }

  @ResolveField(() => Number, { nullable: true })
  async totalBookingDays(@Parent() billboard: Billboard) {
    const bookingDaysSum = await this.prisma.campaign.aggregate({
      _sum: { totalDays: true },
      where: {
        status: { status: { equals: 'LIVE' } },
        bookings: { some: { billboardId: { equals: billboard.id } } },
      },
    })
    return bookingDaysSum._sum.totalDays
  }

  @ResolveField(() => Boolean, { nullable: true })
  async booked(@Parent() billboard: Billboard) {
    const currentDate = new Date()

    const booking = await this.prisma.booking.findMany({
      where: {
        billboardId: { equals: billboard.id },
        campaign: {
          startDate: {
            lte: currentDate,
          },
          endDate: {
            gte: currentDate,
          },
        },
      },
    })

    return booking.length > 0 ? true : false
  }
}
