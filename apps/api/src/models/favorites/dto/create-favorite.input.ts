import { InputType, PickType } from '@nestjs/graphql'
import { Favorite } from '../entities/favorite.entity'

@InputType()
export class CreateFavoriteInput extends PickType(
  Favorite,
  ['advertiserId', 'billboardId'],
  InputType,
) {}
