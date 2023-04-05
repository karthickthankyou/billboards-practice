import { Injectable } from '@nestjs/common'
import {
  FindManyBillboardStatusArgs,
  FindUniqueBillboardStatusArgs,
} from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBillboardStatusInput } from './dto/create-billboard-status.input'
import { UpdateBillboardStatusInput } from './dto/update-billboard-status.input'

@Injectable()
export class BillboardStatusesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBillboardStatusInput: CreateBillboardStatusInput) {
    return this.prisma.billboardStatus.create({
      data: createBillboardStatusInput,
    })
  }

  findAll(args: FindManyBillboardStatusArgs) {
    return this.prisma.billboardStatus.findMany(args)
  }

  findOne(args: FindUniqueBillboardStatusArgs) {
    return this.prisma.billboardStatus.findUnique(args)
  }

  update(updateBillboardStatusInput: UpdateBillboardStatusInput) {
    const { billboardId, ...data } = updateBillboardStatusInput
    return this.prisma.billboardStatus.update({
      where: { billboardId },
      data: data,
    })
  }

  remove(args: FindUniqueBillboardStatusArgs) {
    return this.prisma.billboardStatus.delete(args)
  }
}
