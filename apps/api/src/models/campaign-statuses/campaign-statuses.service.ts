import { Injectable } from '@nestjs/common'
import {
  FindManyCampaignStatusArgs,
  FindUniqueCampaignStatusArgs,
} from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateCampaignStatusInput } from './dto/create-campaign-status.input'
import { UpdateCampaignStatusInput } from './dto/update-campaign-status.input'

@Injectable()
export class CampaignStatusesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCampaignStatusInput: CreateCampaignStatusInput) {
    return this.prisma.campaignStatus.create({
      data: createCampaignStatusInput,
    })
  }

  findAll(args: FindManyCampaignStatusArgs) {
    return this.prisma.campaignStatus.findMany(args)
  }

  findOne(args: FindUniqueCampaignStatusArgs) {
    return this.prisma.campaignStatus.findUnique(args)
  }

  update(updateCampaignStatusInput: UpdateCampaignStatusInput) {
    const { campaignId, ...data } = updateCampaignStatusInput
    return this.prisma.campaignStatus.update({
      where: { campaignId },
      data: data,
    })
  }

  remove(args: FindUniqueCampaignStatusArgs) {
    return this.prisma.campaignStatus.delete(args)
  }
}
