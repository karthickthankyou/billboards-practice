import { Module } from '@nestjs/common'
import { CampaignsService } from './campaigns.service'
import { CampaignsResolver } from './campaigns.resolver'

@Module({
  providers: [CampaignsResolver, CampaignsService],
  exports: [CampaignsService],
})
export class CampaignsModule {}
