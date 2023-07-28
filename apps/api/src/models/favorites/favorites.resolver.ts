import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { FavoritesService } from './favorites.service'
import { Favorite } from './entities/favorite.entity'
import { FindManyFavoriteArgs, FindUniqueFavoriteArgs } from './dto/find.args'
import { CreateFavoriteInput } from './dto/create-favorite.input'
import { UpdateFavoriteInput } from './dto/update-favorite.input'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { Advertiser } from '../advertisers/entities/advertiser.entity'
import { Billboard } from '../billboards/entities/billboard.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/guards'
import { AggregateCountOutput } from '../billboards/dto/count.output'
import { FavoriteWhereInput } from './dto/where.args'

@Resolver(() => Favorite)
export class FavoritesResolver {
  constructor(
    private readonly favoritesService: FavoritesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Favorite)
  async createFavorite(
    @Args('createFavoriteInput') args: CreateFavoriteInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.advertiserId)

    const advertiser = await this.prisma.advertiser.findUnique({
      where: { uid: args.advertiserId },
    })

    if (!advertiser?.uid) {
      await this.prisma.advertiser.create({
        data: { uid: args.advertiserId, name: '' },
      })
    }
    const favorite = await this.favoritesService.findOne({
      where: { advertiserId_billboardId: args },
    })
    if (favorite) {
      return favorite
    }
    return this.favoritesService.create(args)
  }

  @AllowAuthenticated()
  @Query(() => [Favorite], { name: 'favorites' })
  findAll(@Args() args: FindManyFavoriteArgs) {
    return this.favoritesService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => Favorite, { name: 'favorite', nullable: true })
  findOne(@Args() args: FindUniqueFavoriteArgs) {
    return this.favoritesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Favorite)
  updateFavorite(
    @Args('updateFavoriteInput') args: UpdateFavoriteInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.advertiserId)

    return this.favoritesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Favorite)
  removeFavorite(
    @Args() args: FindUniqueFavoriteArgs,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(
      user,
      args.where.advertiserId_billboardId.advertiserId,
    )

    return this.favoritesService.remove(args)
  }

  @ResolveField(() => Advertiser)
  advertiser(@Parent() favorite: Favorite) {
    return this.prisma.advertiser.findUnique({
      where: { uid: favorite.advertiserId },
    })
  }

  @ResolveField(() => Billboard)
  billboard(@Parent() favorite: Favorite) {
    return this.prisma.billboard.findUnique({
      where: { id: favorite.billboardId },
    })
  }

  @Query(() => AggregateCountOutput, { name: 'favoritesCount' })
  async favoritesCount(
    @Args('FavoriteWhereInput', { nullable: true }) where: FavoriteWhereInput,
  ) {
    const productCount = await this.prisma.favorite.aggregate({
      _count: { _all: true },
      where,
    })

    return { count: productCount._count._all }
  }
}
