import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { OwnersService } from './owners.service'
import { Owner } from './entities/owner.entity'
import { FindManyOwnerArgs, FindUniqueOwnerArgs } from './dto/find.args'
import { CreateOwnerInput } from './dto/create-owner.input'
import { UpdateOwnerInput } from './dto/update-owner.input'
import { Billboard } from '../billboards/entities/billboard.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => Owner)
export class OwnersResolver {
  constructor(
    private readonly ownersService: OwnersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Owner)
  createOwner(
    @Args('createOwnerInput') args: CreateOwnerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.ownersService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Owner], { name: 'owners' })
  findAll(@Args() args: FindManyOwnerArgs) {
    return this.ownersService.findAll(args)
  }

  @Query(() => Owner, { name: 'owner', nullable: true })
  findOne(@Args() args: FindUniqueOwnerArgs) {
    return this.ownersService.findOne(args)
  }

  @AllowAuthenticated()
  @Query(() => Owner, { name: 'ownerMe', nullable: true })
  ownerMe(@GetUser() user: GetUserType) {
    return this.ownersService.findOne({ where: { uid: user.uid } })
  }

  @AllowAuthenticated()
  @Mutation(() => Owner)
  updateOwner(
    @Args('updateOwnerInput') args: UpdateOwnerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.ownersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Owner)
  removeOwner(@Args() args: FindUniqueOwnerArgs, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, args.where.uid)
    return this.ownersService.remove(args)
  }

  @ResolveField(() => [Billboard], { nullable: true })
  billboards(@Parent() owner: Owner) {
    return this.prisma.billboard.findMany({
      where: { ownerId: owner.uid },
    })
  }
}
