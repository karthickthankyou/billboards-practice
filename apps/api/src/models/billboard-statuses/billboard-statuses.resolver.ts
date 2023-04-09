import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { BillboardStatusesService } from './billboard-statuses.service'
import { BillboardStatus } from './entities/billboard-status.entity'
import {
  FindManyBillboardStatusArgs,
  FindUniqueBillboardStatusArgs,
} from './dto/find.args'
import { CreateBillboardStatusInput } from './dto/create-billboard-status.input'
import { UpdateBillboardStatusInput } from './dto/update-billboard-status.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Billboard } from '../billboards/entities/billboard.entity'
import { AllowAuthenticated } from 'src/common/decorators/auth/auth.decorator'
import { Agent } from '../agents/entities/agent.entity'

@Resolver(() => BillboardStatus)
export class BillboardStatusesResolver {
  constructor(
    private readonly billboardStatusesService: BillboardStatusesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin')
  @Mutation(() => BillboardStatus)
  createBillboardStatus(
    @Args('createBillboardStatusInput') args: CreateBillboardStatusInput,
  ) {
    return this.billboardStatusesService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [BillboardStatus], { name: 'billboardStatuses' })
  findAll(@Args() args: FindManyBillboardStatusArgs) {
    return this.billboardStatusesService.findAll(args)
  }

  @Query(() => BillboardStatus, { name: 'billboardStatus' })
  findOne(@Args() args: FindUniqueBillboardStatusArgs) {
    return this.billboardStatusesService.findOne(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => BillboardStatus)
  updateBillboardStatus(
    @Args('updateBillboardStatusInput') args: UpdateBillboardStatusInput,
  ) {
    return this.billboardStatusesService.update(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => BillboardStatus)
  removeBillboardStatus(@Args() args: FindUniqueBillboardStatusArgs) {
    return this.billboardStatusesService.remove(args)
  }

  @ResolveField(() => Billboard)
  billboard(@Parent() billboardStatus: BillboardStatus) {
    return this.prisma.billboard.findUnique({
      where: { id: billboardStatus.billboardId },
    })
  }
  @ResolveField(() => Agent, { nullable: true })
  agent(@Parent() billboardStatus: BillboardStatus) {
    return this.prisma.agent.findUnique({
      where: { uid: billboardStatus.agentId },
    })
  }
}
