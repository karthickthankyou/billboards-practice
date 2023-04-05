import { Module } from '@nestjs/common'
import { CampaignTimelinesService } from './campaign-timelines.service'
import { CampaignTimelinesResolver } from './campaign-timelines.resolver'

@Module({
  providers: [CampaignTimelinesResolver, CampaignTimelinesService],
  exports: [CampaignTimelinesService],
})
export class CampaignTimelinesModule {}
