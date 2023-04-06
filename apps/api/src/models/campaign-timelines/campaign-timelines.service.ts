import { Injectable } from '@nestjs/common'
import {
  FindManyCampaignTimelineArgs,
  FindUniqueCampaignTimelineArgs,
} from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateCampaignTimelineInput } from './dto/create-campaign-timeline.input'
import { UpdateCampaignTimelineInput } from './dto/update-campaign-timeline.input'

@Injectable()
export class CampaignTimelinesService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    agentId,
    campaignId,
    notes,
    status,
  }: CreateCampaignTimelineInput) {
    const [campaignStatus, campaignTimeline] = await this.prisma.$transaction([
      this.prisma.campaignStatus.update({
        where: {
          campaignId,
        },
        data: {
          status,
          agentId,
        },
      }),
      this.prisma.campaignTimeline.create({
        data: {
          campaignId,
          notes,
          agentId,
          status,
        },
      }),
    ])
    return campaignTimeline
  }

  findAll(args: FindManyCampaignTimelineArgs) {
    return this.prisma.campaignTimeline.findMany(args)
  }

  findOne(args: FindUniqueCampaignTimelineArgs) {
    return this.prisma.campaignTimeline.findUnique(args)
  }

  update(updateCampaignTimelineInput: UpdateCampaignTimelineInput) {
    const { id, ...data } = updateCampaignTimelineInput
    return this.prisma.campaignTimeline.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueCampaignTimelineArgs) {
    return this.prisma.campaignTimeline.delete(args)
  }
}
