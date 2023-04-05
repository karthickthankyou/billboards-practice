import { Injectable } from '@nestjs/common'
import { FindManyOwnerArgs, FindUniqueOwnerArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateOwnerInput } from './dto/create-owner.input'
import { UpdateOwnerInput } from './dto/update-owner.input'

@Injectable()
export class OwnersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOwnerInput: CreateOwnerInput) {
    return this.prisma.owner.create({
      data: createOwnerInput,
    })
  }

  findAll(args: FindManyOwnerArgs) {
    return this.prisma.owner.findMany(args)
  }

  findOne(args: FindUniqueOwnerArgs) {
    return this.prisma.owner.findUnique(args)
  }

  update(updateOwnerInput: UpdateOwnerInput) {
    const { uid, ...data } = updateOwnerInput
    return this.prisma.owner.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueOwnerArgs) {
    return this.prisma.owner.delete(args)
  }
}
