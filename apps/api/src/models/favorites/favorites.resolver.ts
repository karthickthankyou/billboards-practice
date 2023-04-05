import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { FavoritesService } from './favorites.service'
import { Favorite } from './entities/favorite.entity'
import { FindManyFavoriteArgs, FindUniqueFavoriteArgs } from './dto/find.args'
import { CreateFavoriteInput } from './dto/create-favorite.input'
import { UpdateFavoriteInput } from './dto/update-favorite.input'

@Resolver(() => Favorite)
export class FavoritesResolver {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Mutation(() => Favorite)
  createFavorite(@Args('createFavoriteInput') args: CreateFavoriteInput) {
    return this.favoritesService.create(args)
  }

  @Query(() => [Favorite], { name: 'favorites' })
  findAll(@Args() args: FindManyFavoriteArgs) {
    return this.favoritesService.findAll(args)
  }

  @Query(() => Favorite, { name: 'favorite' })
  findOne(@Args() args: FindUniqueFavoriteArgs) {
    return this.favoritesService.findOne(args)
  }

  @Mutation(() => Favorite)
  updateFavorite(@Args('updateFavoriteInput') args: UpdateFavoriteInput) {
    return this.favoritesService.update(args)
  }

  @Mutation(() => Favorite)
  removeFavorite(@Args() args: FindUniqueFavoriteArgs) {
    return this.favoritesService.remove(args)
  }
}
