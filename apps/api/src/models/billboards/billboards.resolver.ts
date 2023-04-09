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
import { BillboardPublic } from './dto/billboard-public.output'
import { DateFilterInput, LocationFilterInput } from './dto/filters.input'

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
        status: { status: 'APPROVED' },
        bookings: {
          none: {
            campaign: {
              is: {
                status: { status: 'APPROVED' },
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

    console.log('billboards: ', billboards)
    return billboards
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
  status(@Parent() billboard: Billboard) {
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

  @AllowAuthenticated()
  @ResolveField(() => Number, { nullable: true })
  async totalBookingDays(
    @Parent() billboard: Billboard,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, billboard.ownerId)
    const result = await this.prisma.$queryRaw`
    SELECT SUM(EXTRACT(day FROM ("endDate"::timestamp - "startDate"::timestamp))) as total_booked_days
    FROM "Booking" JOIN "Campaign" ON "Booking"."campaignId" = "Campaign"."id"
    WHERE "Booking"."billboardId" = ${billboard.id};
  `
    console.log('result', result)
    return result[0].total_booked_days || 0
  }

  @AllowAuthenticated()
  @ResolveField(() => Boolean)
  async booked(@Parent() billboard: Billboard, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, billboard.ownerId)
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
