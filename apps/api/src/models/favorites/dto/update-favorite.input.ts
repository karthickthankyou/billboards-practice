import { CreateFavoriteInput } from './create-favorite.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { FavoriteUnique } from './where.args'

@InputType()
export class UpdateFavoriteInput extends PartialType(CreateFavoriteInput) {
  @Field(() => FavoriteUnique, { nullable: true })
  advertiserId_billboardId: FavoriteUnique
}
