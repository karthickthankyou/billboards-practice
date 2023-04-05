import { Module } from '@nestjs/common'
import { AdvertisersService } from './advertisers.service'
import { AdvertisersResolver } from './advertisers.resolver'

@Module({
  providers: [AdvertisersResolver, AdvertisersService],
  exports: [AdvertisersService],
})
export class AdvertisersModule {}
