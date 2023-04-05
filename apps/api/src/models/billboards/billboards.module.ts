import { Module } from '@nestjs/common'
import { BillboardsService } from './billboards.service'
import { BillboardsResolver } from './billboards.resolver'

@Module({
  providers: [BillboardsResolver, BillboardsService],
  exports: [BillboardsService],
})
export class BillboardsModule {}
