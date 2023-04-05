import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BillboardsService } from './billboards.service'
import { Billboard } from './entities/billboard.entity'
import { FindManyBillboardArgs, FindUniqueBillboardArgs } from './dto/find.args'
import { CreateBillboardInput } from './dto/create-billboard.input'
import { UpdateBillboardInput } from './dto/update-billboard.input'

@Resolver(() => Billboard)
export class BillboardsResolver {
  constructor(private readonly billboardsService: BillboardsService) {}

  @Mutation(() => Billboard)
  createBillboard(@Args('createBillboardInput') args: CreateBillboardInput) {
    return this.billboardsService.create(args)
  }

  @Query(() => [Billboard], { name: 'billboards' })
  findAll(@Args() args: FindManyBillboardArgs) {
    return this.billboardsService.findAll(args)
  }

  @Query(() => Billboard, { name: 'billboard' })
  findOne(@Args() args: FindUniqueBillboardArgs) {
    return this.billboardsService.findOne(args)
  }

  @Mutation(() => Billboard)
  updateBillboard(@Args('updateBillboardInput') args: UpdateBillboardInput) {
    return this.billboardsService.update(args)
  }

  @Mutation(() => Billboard)
  removeBillboard(@Args() args: FindUniqueBillboardArgs) {
    return this.billboardsService.remove(args)
  }
}
