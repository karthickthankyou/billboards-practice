import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { BookingsService } from './bookings.service'
import { Booking } from './entities/booking.entity'
import { FindManyBookingArgs, FindUniqueBookingArgs } from './dto/find.args'
import { CreateBookingInput } from './dto/create-booking.input'
import { UpdateBookingInput } from './dto/update-booking.input'
import { PrismaService } from 'src/common/prisma/prisma.service'

import { Campaign } from '../campaigns/entities/campaign.entity'
import { Billboard } from '../billboards/entities/billboard.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { AggregateCountOutput } from '../billboards/dto/count.output'
import { BookingWhereInput } from './dto/where.args'

@Resolver(() => Booking)
export class BookingsResolver {
  constructor(
    private readonly bookingsService: BookingsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin', 'agent')
  @Mutation(() => Booking)
  createBooking(@Args('createBookingInput') args: CreateBookingInput) {
    return this.bookingsService.create(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Query(() => [Booking], { name: 'bookings' })
  findAll(@Args() args: FindManyBookingArgs) {
    return this.bookingsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [Booking], { name: 'myBookings' })
  myBookings(@Args() args: FindManyBookingArgs, @GetUser() user: GetUserType) {
    return this.prisma.booking.findMany({
      ...args,
      where: {
        ...args.where,
        billboard: { is: { ownerId: { equals: user.uid } } },
      },
    })
  }

  @AllowAuthenticated('admin', 'agent')
  @Query(() => Booking, { name: 'booking' })
  findOne(@Args() args: FindUniqueBookingArgs) {
    return this.bookingsService.findOne(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Mutation(() => Booking)
  updateBooking(@Args('updateBookingInput') args: UpdateBookingInput) {
    return this.bookingsService.update(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Mutation(() => Booking)
  removeBooking(@Args() args: FindUniqueBookingArgs) {
    return this.bookingsService.remove(args)
  }

  @ResolveField(() => Campaign, { nullable: true })
  campaign(@Parent() booking: Booking) {
    return this.prisma.campaign.findUnique({
      where: { id: booking.campaignId },
    })
  }

  @ResolveField(() => Billboard, { nullable: true })
  billboard(@Parent() booking: Booking) {
    return this.prisma.billboard.findUnique({
      where: { id: booking.billboardId },
    })
  }

  @Query(() => AggregateCountOutput, { name: 'bookingsCount' })
  async bookingsCount(
    @Args('BookingWhereInput', { nullable: true }) where: BookingWhereInput,
  ) {
    const productCount = await this.prisma.booking.aggregate({
      _count: { _all: true },
      where,
    })

    return { count: productCount._count._all }
  }
}
