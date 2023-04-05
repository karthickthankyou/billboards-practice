import { InputType, PickType } from '@nestjs/graphql'
import { Owner } from '../entities/owner.entity'

@InputType()
export class CreateOwnerInput extends PickType(
  Owner,
  ['uid', 'name'],
  InputType,
) {}
