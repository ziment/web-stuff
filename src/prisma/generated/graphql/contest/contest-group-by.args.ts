import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestWhereInput } from './contest-where.input';
import { Type } from 'class-transformer';
import { ContestOrderByWithAggregationInput } from './contest-order-by-with-aggregation.input';
import { ContestScalarFieldEnum } from './contest-scalar-field.enum';
import { ContestScalarWhereWithAggregatesInput } from './contest-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ContestCountAggregateInput } from './contest-count-aggregate.input';
import { ContestAvgAggregateInput } from './contest-avg-aggregate.input';
import { ContestSumAggregateInput } from './contest-sum-aggregate.input';
import { ContestMinAggregateInput } from './contest-min-aggregate.input';
import { ContestMaxAggregateInput } from './contest-max-aggregate.input';

@ArgsType()
export class ContestGroupByArgs {

    @Field(() => ContestWhereInput, {nullable:true})
    @Type(() => ContestWhereInput)
    where?: ContestWhereInput;

    @Field(() => [ContestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ContestOrderByWithAggregationInput>;

    @Field(() => [ContestScalarFieldEnum], {nullable:false})
    by!: Array<`${ContestScalarFieldEnum}`>;

    @Field(() => ContestScalarWhereWithAggregatesInput, {nullable:true})
    having?: ContestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContestCountAggregateInput, {nullable:true})
    _count?: ContestCountAggregateInput;

    @Field(() => ContestAvgAggregateInput, {nullable:true})
    _avg?: ContestAvgAggregateInput;

    @Field(() => ContestSumAggregateInput, {nullable:true})
    _sum?: ContestSumAggregateInput;

    @Field(() => ContestMinAggregateInput, {nullable:true})
    _min?: ContestMinAggregateInput;

    @Field(() => ContestMaxAggregateInput, {nullable:true})
    _max?: ContestMaxAggregateInput;
}
