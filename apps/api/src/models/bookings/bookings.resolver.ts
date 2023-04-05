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
import { AllowAuthenticated } from 'src/common/decorators/auth/auth.decorator'

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

  @ResolveField(() => Campaign)
  campaign(@Parent() booking: Booking) {
    return this.prisma.campaign.findUnique({
      where: { id: booking.campaignId },
    })
  }

  @ResolveField(() => Billboard)
  billboard(@Parent() booking: Booking) {
    return this.prisma.billboard.findUnique({
      where: { id: booking.billboardId },
    })
  }
}
