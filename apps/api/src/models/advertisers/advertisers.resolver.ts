import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { AdvertisersService } from './advertisers.service'
import { Advertiser } from './entities/advertiser.entity'
import {
  FindManyAdvertiserArgs,
  FindUniqueAdvertiserArgs,
} from './dto/find.args'
import { CreateAdvertiserInput } from './dto/create-advertiser.input'
import { UpdateAdvertiserInput } from './dto/update-advertiser.input'

@Resolver(() => Advertiser)
export class AdvertisersResolver {
  constructor(private readonly advertisersService: AdvertisersService) {}

  @Mutation(() => Advertiser)
  createAdvertiser(@Args('createAdvertiserInput') args: CreateAdvertiserInput) {
    return this.advertisersService.create(args)
  }

  @Query(() => [Advertiser], { name: 'advertisers' })
  findAll(@Args() args: FindManyAdvertiserArgs) {
    return this.advertisersService.findAll(args)
  }

  @Query(() => Advertiser, { name: 'advertiser' })
  findOne(@Args() args: FindUniqueAdvertiserArgs) {
    return this.advertisersService.findOne(args)
  }

  @Mutation(() => Advertiser)
  updateAdvertiser(@Args('updateAdvertiserInput') args: UpdateAdvertiserInput) {
    return this.advertisersService.update(args)
  }

  @Mutation(() => Advertiser)
  removeAdvertiser(@Args() args: FindUniqueAdvertiserArgs) {
    return this.advertisersService.remove(args)
  }
}
