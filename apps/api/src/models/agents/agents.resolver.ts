import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { AgentsService } from './agents.service'
import { Agent } from './entities/agent.entity'
import { FindManyAgentArgs, FindUniqueAgentArgs } from './dto/find.args'
import { CreateAgentInput } from './dto/create-agent.input'
import { UpdateAgentInput } from './dto/update-agent.input'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { BillboardStatus } from '../billboard-statuses/entities/billboard-status.entity'

import { checkRowLevelPermission } from 'src/common/guards'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CampaignStatus } from '../campaign-statuses/entities/campaign-status.entity'
import { BillboardTimeline } from '../billboard-timelines/entities/billboard-timeline.entity'
import { CampaignTimeline } from '../campaign-timelines/entities/campaign-timeline.entity'
import { FirebaseService } from 'src/common/firebase/firebase.service'
import { GetUserType } from 'src/common/types'

@Resolver(() => Agent)
export class AgentsResolver {
  constructor(
    private readonly agentsService: AgentsService,
    private readonly prisma: PrismaService,
    private readonly firebase: FirebaseService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Agent)
  async createAgent(
    @Args('createAgentInput') args: CreateAgentInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    await this.firebase.setRole(user, 'agent')
    return this.agentsService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Agent], { name: 'agents' })
  findAll(@Args() args: FindManyAgentArgs) {
    return this.agentsService.findAll(args)
  }

  @Query(() => Agent, { name: 'agent', nullable: true })
  findOne(@Args() args: FindUniqueAgentArgs) {
    return this.agentsService.findOne(args)
  }

  @AllowAuthenticated()
  @Query(() => Agent, { name: 'agentMe', nullable: true })
  agentMe(@Args() args: FindUniqueAgentArgs, @GetUser() user: GetUserType) {
    return this.agentsService.findOne({ where: { uid: user.uid } })
  }

  @AllowAuthenticated()
  @Mutation(() => Agent)
  updateAgent(
    @Args('updateAgentInput') args: UpdateAgentInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)

    return this.agentsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Agent)
  removeAgent(@Args() args: FindUniqueAgentArgs, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, args.where.uid)

    return this.agentsService.remove(args)
  }

  @AllowAuthenticated()
  @ResolveField(() => [BillboardStatus], { nullable: true })
  billboardsStatuses(@Parent() agent: Agent, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, agent.uid)
    return this.prisma.billboardStatus.findMany({
      where: { agentId: { equals: agent.uid } },
    })
  }

  @AllowAuthenticated()
  @ResolveField(() => [CampaignStatus], { nullable: true })
  campaignsStatuses(@Parent() agent: Agent, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, agent.uid)
    return this.prisma.campaignStatus.findMany({
      where: { agentId: { equals: agent.uid } },
    })
  }
  @AllowAuthenticated()
  @ResolveField(() => [BillboardTimeline], { nullable: true })
  billboardTimeline(@Parent() agent: Agent, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, agent.uid)
    return this.prisma.billboardTimeline.findMany({
      where: { agentId: { equals: agent.uid } },
    })
  }
  @AllowAuthenticated()
  @ResolveField(() => [CampaignTimeline], { nullable: true })
  campaignTimeline(@Parent() agent: Agent, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, agent.uid)
    return this.prisma.campaignTimeline.findMany({
      where: { agentId: { equals: agent.uid } },
    })
  }
}
