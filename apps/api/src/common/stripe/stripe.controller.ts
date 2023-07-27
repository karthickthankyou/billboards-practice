import { Controller, Post, Body, Get, Query, Res } from '@nestjs/common'
import { CreateStripeDto } from './dto/create-stripe-session.dto'
import StripeService from './stripe.service'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBookingInput } from 'prisma/seed/generated/graphql'
import { Response } from 'express'

@Controller('stripe')
export class StripeController {
  constructor(
    private readonly stripeService: StripeService,
    private readonly prisma: PrismaService,
  ) {}

  @Post()
  create(@Body() createStripeDto: CreateStripeDto) {
    return this.stripeService.createStripeSession(createStripeDto)
  }

  @Get('success')
  async handleStripeSuccess(
    @Query('session_id') sessionId: string,
    @Res() res: Response,
  ) {
    const session = await this.stripeService.stripe.checkout.sessions.retrieve(
      sessionId,
    )
    const { uid, bookingData } = session.metadata
    const bookingInput: CreateBookingInput = JSON.parse(bookingData)

    // Add booking

    res.redirect(process.env.BOOKINGS_REDIRECT_URL)
  }
}
