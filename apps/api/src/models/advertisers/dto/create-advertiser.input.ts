import { InputType, PickType } from '@nestjs/graphql'
import { Advertiser } from '../entities/advertiser.entity'

@InputType()
export class CreateAdvertiserInput extends PickType(
  Advertiser,
  ['uid', 'name'],
  InputType,
) {}
