import { Injectable } from '@nestjs/common'
import { FindManyBillboardArgs, FindUniqueBillboardArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBillboardInput } from './dto/create-billboard.input'
import { UpdateBillboardInput } from './dto/update-billboard.input'
import { BillboardStatusType } from '@prisma/client'

@Injectable()
export class BillboardsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBillboardInput: CreateBillboardInput) {
    const billboard = await this.prisma.billboard.create({
      data: createBillboardInput,
    })
    await this.prisma.billboardTimeline.create({
      data: {
        status: BillboardStatusType.NEW,
        billboardId: billboard.id,
        notes: 'System generated',
      },
    })

    await this.prisma.billboardStatus.create({
      data: {
        status: BillboardStatusType.NEW,
        billboardId: billboard.id,
        notes: 'System generated',
      },
    })

    return billboard
  }

  findAll(args: FindManyBillboardArgs) {
    return this.prisma.billboard.findMany(args)
  }

  findOne(args: FindUniqueBillboardArgs) {
    return this.prisma.billboard.findUnique(args)
  }

  update(updateBillboardInput: UpdateBillboardInput) {
    const { id, ...data } = updateBillboardInput
    return this.prisma.billboard.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueBillboardArgs) {
    return this.prisma.billboard.delete(args)
  }
}
