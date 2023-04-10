import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AggregateCountOutput {
  @Field(() => Number)
  count: number
}
