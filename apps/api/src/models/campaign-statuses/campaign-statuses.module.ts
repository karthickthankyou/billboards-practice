import { Module } from '@nestjs/common'
import { CampaignStatusesService } from './campaign-statuses.service'
import { CampaignStatusesResolver } from './campaign-statuses.resolver'

@Module({
  providers: [CampaignStatusesResolver, CampaignStatusesService],
  exports: [CampaignStatusesService],
})
export class CampaignStatusesModule {}
