import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BillboardTimelinesService } from './billboard-timelines.service'
import { BillboardTimeline } from './entities/billboard-timeline.entity'
import {
  FindManyBillboardTimelineArgs,
  FindUniqueBillboardTimelineArgs,
} from './dto/find.args'
import { CreateBillboardTimelineInput } from './dto/create-billboard-timeline.input'
import { UpdateBillboardTimelineInput } from './dto/update-billboard-timeline.input'

@Resolver(() => BillboardTimeline)
export class BillboardTimelinesResolver {
  constructor(
    private readonly billboardTimelinesService: BillboardTimelinesService,
  ) {}

  @Mutation(() => BillboardTimeline)
  createBillboardTimeline(
    @Args('createBillboardTimelineInput') args: CreateBillboardTimelineInput,
  ) {
    return this.billboardTimelinesService.create(args)
  }

  @Query(() => [BillboardTimeline], { name: 'billboardTimelines' })
  findAll(@Args() args: FindManyBillboardTimelineArgs) {
    return this.billboardTimelinesService.findAll(args)
  }

  @Query(() => BillboardTimeline, { name: 'billboardTimeline' })
  findOne(@Args() args: FindUniqueBillboardTimelineArgs) {
    return this.billboardTimelinesService.findOne(args)
  }

  @Mutation(() => BillboardTimeline)
  updateBillboardTimeline(
    @Args('updateBillboardTimelineInput') args: UpdateBillboardTimelineInput,
  ) {
    return this.billboardTimelinesService.update(args)
  }

  @Mutation(() => BillboardTimeline)
  removeBillboardTimeline(@Args() args: FindUniqueBillboardTimelineArgs) {
    return this.billboardTimelinesService.remove(args)
  }
}
