import { ObjectType } from '@nestjs/graphql'
import { Favorite as FavoriteType } from '@prisma/client'

@ObjectType()
export class Favorite implements FavoriteType {
  createdAt: Date
  updatedAt: Date
  advertiserId: string
  billboardId: number
}
