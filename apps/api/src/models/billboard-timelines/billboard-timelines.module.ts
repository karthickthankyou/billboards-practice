import { Module } from '@nestjs/common'
import { BillboardTimelinesService } from './billboard-timelines.service'
import { BillboardTimelinesResolver } from './billboard-timelines.resolver'

@Module({
  providers: [BillboardTimelinesResolver, BillboardTimelinesService],
  exports: [BillboardTimelinesService],
})
export class BillboardTimelinesModule {}
