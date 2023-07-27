import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { BillboardTimelinesService } from './billboard-timelines.service'
import { BillboardTimeline } from './entities/billboard-timeline.entity'
import {
  FindManyBillboardTimelineArgs,
  FindUniqueBillboardTimelineArgs,
} from './dto/find.args'
import { CreateBillboardTimelineInput } from './dto/create-billboard-timeline.input'
import { UpdateBillboardTimelineInput } from './dto/update-billboard-timeline.input'
import { BillboardStatus } from '@prisma/client'
import { Agent } from '../agents/entities/agent.entity'
import { Billboard } from '../billboards/entities/billboard.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { AllowAuthenticated } from 'src/common/decorators/auth/auth.decorator'
import { BadRequestException } from '@nestjs/common'

@Resolver(() => BillboardTimeline)
export class BillboardTimelinesResolver {
  constructor(
    private readonly billboardTimelinesService: BillboardTimelinesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin', 'agent')
  @Mutation(() => BillboardTimeline)
  async createBillboardTimeline(
    @Args('createBillboardTimelineInput') args: CreateBillboardTimelineInput,
  ) {
    const { agentId, billboardId, notes, status } = args

    // Update latest status.
    await this.prisma.billboardStatus.upsert({
      create: { status, agentId, billboardId, notes },
      update: { status, notes },
      where: { billboardId },
    })
    return this.billboardTimelinesService.create(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Query(() => [BillboardTimeline], { name: 'allBillboardTimelines' })
  findAll(@Args() args: FindManyBillboardTimelineArgs) {
    return this.billboardTimelinesService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [BillboardTimeline], { name: 'billboardTimeline' })
  async billboardTimeline(@Args() args: FindManyBillboardTimelineArgs) {
    if (args.where.billboardId) {
      throw new BadRequestException('Billboard id not found.')
    }

    return this.billboardTimelinesService.findAll({
      ...args,
      where: { ...args.where, billboardId: args.where.billboardId },
    })
  }

  @AllowAuthenticated()
  @Query(() => BillboardTimeline, { name: 'billboardTimelineInstance' })
  findOne(@Args() args: FindUniqueBillboardTimelineArgs) {
    return this.billboardTimelinesService.findOne(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Mutation(() => BillboardTimeline)
  async updateBillboardTimeline(
    @Args('updateBillboardTimelineInput') args: UpdateBillboardTimelineInput,
  ) {
    return this.billboardTimelinesService.update(args)
  }

  @AllowAuthenticated('admin', 'agent')
  @Mutation(() => BillboardTimeline)
  removeBillboardTimeline(@Args() args: FindUniqueBillboardTimelineArgs) {
    return this.billboardTimelinesService.remove(args)
  }

  @ResolveField(() => Billboard, { nullable: true })
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
