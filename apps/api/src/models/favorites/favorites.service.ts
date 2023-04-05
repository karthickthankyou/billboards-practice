import { Injectable } from '@nestjs/common'
import { FindManyFavoriteArgs, FindUniqueFavoriteArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateFavoriteInput } from './dto/create-favorite.input'
import { UpdateFavoriteInput } from './dto/update-favorite.input'

@Injectable()
export class FavoritesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFavoriteInput: CreateFavoriteInput) {
    return this.prisma.favorite.create({
      data: createFavoriteInput,
    })
  }

  findAll(args: FindManyFavoriteArgs) {
    return this.prisma.favorite.findMany(args)
  }

  findOne(args: FindUniqueFavoriteArgs) {
    return this.prisma.favorite.findUnique(args)
  }

  update(updateFavoriteInput: UpdateFavoriteInput) {
    const { advertiserId_billboardId, ...data } = updateFavoriteInput
    return this.prisma.favorite.update({
      where: { advertiserId_billboardId },
      data: data,
    })
  }

  remove(args: FindUniqueFavoriteArgs) {
    return this.prisma.favorite.delete(args)
  }
}
