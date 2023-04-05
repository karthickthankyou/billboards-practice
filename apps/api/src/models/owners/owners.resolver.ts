import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { OwnersService } from './owners.service'
import { Owner } from './entities/owner.entity'
import { FindManyOwnerArgs, FindUniqueOwnerArgs } from './dto/find.args'
import { CreateOwnerInput } from './dto/create-owner.input'
import { UpdateOwnerInput } from './dto/update-owner.input'

@Resolver(() => Owner)
export class OwnersResolver {
  constructor(private readonly ownersService: OwnersService) {}

  @Mutation(() => Owner)
  createOwner(@Args('createOwnerInput') args: CreateOwnerInput) {
    return this.ownersService.create(args)
  }

  @Query(() => [Owner], { name: 'owners' })
  findAll(@Args() args: FindManyOwnerArgs) {
    return this.ownersService.findAll(args)
  }

  @Query(() => Owner, { name: 'owner' })
  findOne(@Args() args: FindUniqueOwnerArgs) {
    return this.ownersService.findOne(args)
  }

  @Mutation(() => Owner)
  updateOwner(@Args('updateOwnerInput') args: UpdateOwnerInput) {
    return this.ownersService.update(args)
  }

  @Mutation(() => Owner)
  removeOwner(@Args() args: FindUniqueOwnerArgs) {
    return this.ownersService.remove(args)
  }
}
