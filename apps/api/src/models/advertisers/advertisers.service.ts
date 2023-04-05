import { Injectable } from '@nestjs/common'
import {
  FindManyAdvertiserArgs,
  FindUniqueAdvertiserArgs,
} from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateAdvertiserInput } from './dto/create-advertiser.input'
import { UpdateAdvertiserInput } from './dto/update-advertiser.input'

@Injectable()
export class AdvertisersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAdvertiserInput: CreateAdvertiserInput) {
    return this.prisma.advertiser.create({
      data: createAdvertiserInput,
    })
  }

  findAll(args: FindManyAdvertiserArgs) {
    return this.prisma.advertiser.findMany(args)
  }

  findOne(args: FindUniqueAdvertiserArgs) {
    return this.prisma.advertiser.findUnique(args)
  }

  update(updateAdvertiserInput: UpdateAdvertiserInput) {
    const { uid, ...data } = updateAdvertiserInput
    return this.prisma.advertiser.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueAdvertiserArgs) {
    return this.prisma.advertiser.delete(args)
  }
}
