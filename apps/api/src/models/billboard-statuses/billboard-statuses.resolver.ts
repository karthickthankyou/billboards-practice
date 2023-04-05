import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BillboardStatusesService } from './billboard-statuses.service'
import { BillboardStatus } from './entities/billboard-status.entity'
import {
  FindManyBillboardStatusArgs,
  FindUniqueBillboardStatusArgs,
} from './dto/find.args'
import { CreateBillboardStatusInput } from './dto/create-billboard-status.input'
import { UpdateBillboardStatusInput } from './dto/update-billboard-status.input'

@Resolver(() => BillboardStatus)
export class BillboardStatusesResolver {
  constructor(
    private readonly billboardStatusesService: BillboardStatusesService,
  ) {}

  @Mutation(() => BillboardStatus)
  createBillboardStatus(
    @Args('createBillboardStatusInput') args: CreateBillboardStatusInput,
  ) {
    return this.billboardStatusesService.create(args)
  }

  @Query(() => [BillboardStatus], { name: 'billboardStatuses' })
  findAll(@Args() args: FindManyBillboardStatusArgs) {
    return this.billboardStatusesService.findAll(args)
  }

  @Query(() => BillboardStatus, { name: 'billboardStatus' })
  findOne(@Args() args: FindUniqueBillboardStatusArgs) {
    return this.billboardStatusesService.findOne(args)
  }

  @Mutation(() => BillboardStatus)
  updateBillboardStatus(
    @Args('updateBillboardStatusInput') args: UpdateBillboardStatusInput,
  ) {
    return this.billboardStatusesService.update(args)
  }

  @Mutation(() => BillboardStatus)
  removeBillboardStatus(@Args() args: FindUniqueBillboardStatusArgs) {
    return this.billboardStatusesService.remove(args)
  }
}
