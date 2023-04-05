import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { AgentsService } from './agents.service'
import { Agent } from './entities/agent.entity'
import { FindManyAgentArgs, FindUniqueAgentArgs } from './dto/find.args'
import { CreateAgentInput } from './dto/create-agent.input'
import { UpdateAgentInput } from './dto/update-agent.input'

@Resolver(() => Agent)
export class AgentsResolver {
  constructor(private readonly agentsService: AgentsService) {}

  @Mutation(() => Agent)
  createAgent(@Args('createAgentInput') args: CreateAgentInput) {
    return this.agentsService.create(args)
  }

  @Query(() => [Agent], { name: 'agents' })
  findAll(@Args() args: FindManyAgentArgs) {
    return this.agentsService.findAll(args)
  }

  @Query(() => Agent, { name: 'agent' })
  findOne(@Args() args: FindUniqueAgentArgs) {
    return this.agentsService.findOne(args)
  }

  @Mutation(() => Agent)
  updateAgent(@Args('updateAgentInput') args: UpdateAgentInput) {
    return this.agentsService.update(args)
  }

  @Mutation(() => Agent)
  removeAgent(@Args() args: FindUniqueAgentArgs) {
    return this.agentsService.remove(args)
  }
}
