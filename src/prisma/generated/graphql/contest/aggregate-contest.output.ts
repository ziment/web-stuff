import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContestCountAggregate } from './contest-count-aggregate.output';
import { ContestAvgAggregate } from './contest-avg-aggregate.output';
import { ContestSumAggregate } from './contest-sum-aggregate.output';
import { ContestMinAggregate } from './contest-min-aggregate.output';
import { ContestMaxAggregate } from './contest-max-aggregate.output';

@ObjectType()
export class AggregateContest {

    @Field(() => ContestCountAggregate, {nullable:true})
    _count?: ContestCountAggregate;

    @Field(() => ContestAvgAggregate, {nullable:true})
    _avg?: ContestAvgAggregate;

    @Field(() => ContestSumAggregate, {nullable:true})
    _sum?: ContestSumAggregate;

    @Field(() => ContestMinAggregate, {nullable:true})
    _min?: ContestMinAggregate;

    @Field(() => ContestMaxAggregate, {nullable:true})
    _max?: ContestMaxAggregate;
}
