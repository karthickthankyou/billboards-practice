import { Injectable } from '@nestjs/common'
import {
  FindManyBillboardTimelineArgs,
  FindUniqueBillboardTimelineArgs,
} from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBillboardTimelineInput } from './dto/create-billboard-timeline.input'
import { UpdateBillboardTimelineInput } from './dto/update-billboard-timeline.input'

@Injectable()
export class BillboardTimelinesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBillboardTimelineInput: CreateBillboardTimelineInput) {
    return this.prisma.billboardTimeline.create({
      data: createBillboardTimelineInput,
    })
  }

  findAll(args: FindManyBillboardTimelineArgs) {
    return this.prisma.billboardTimeline.findMany(args)
  }

  findOne(args: FindUniqueBillboardTimelineArgs) {
    return this.prisma.billboardTimeline.findUnique(args)
  }

  update(updateBillboardTimelineInput: UpdateBillboardTimelineInput) {
    const { id, ...data } = updateBillboardTimelineInput
    return this.prisma.billboardTimeline.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueBillboardTimelineArgs) {
    return this.prisma.billboardTimeline.delete(args)
  }
}
