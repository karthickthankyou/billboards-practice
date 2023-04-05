import { Injectable } from '@nestjs/common'
import { FindManyBillboardArgs, FindUniqueBillboardArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBillboardInput } from './dto/create-billboard.input'
import { UpdateBillboardInput } from './dto/update-billboard.input'

@Injectable()
export class BillboardsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBillboardInput: CreateBillboardInput) {
    return this.prisma.billboard.create({
      data: createBillboardInput,
    })
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
