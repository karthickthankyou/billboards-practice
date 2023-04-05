import { Module } from '@nestjs/common'
import { BillboardStatusesService } from './billboard-statuses.service'
import { BillboardStatusesResolver } from './billboard-statuses.resolver'

@Module({
  providers: [BillboardStatusesResolver, BillboardStatusesService],
  exports: [BillboardStatusesService],
})
export class BillboardStatusesModule {}
