import { Injectable } from '@nestjs/common'
import { FindManyCampaignArgs, FindUniqueCampaignArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateCampaignInput } from './dto/create-campaign.input'
import { UpdateCampaignInput } from './dto/update-campaign.input'

@Injectable()
export class CampaignsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCampaignInput: CreateCampaignInput) {
    return this.prisma.campaign.create({
      data: createCampaignInput,
    })
  }

  findAll(args: FindManyCampaignArgs) {
    return this.prisma.campaign.findMany(args)
  }

  findOne(args: FindUniqueCampaignArgs) {
    return this.prisma.campaign.findUnique(args)
  }

  update(updateCampaignInput: UpdateCampaignInput) {
    const { id, ...data } = updateCampaignInput
    return this.prisma.campaign.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueCampaignArgs) {
    return this.prisma.campaign.delete(args)
  }
}
