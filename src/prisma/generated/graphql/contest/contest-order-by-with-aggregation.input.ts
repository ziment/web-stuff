import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ContestCountOrderByAggregateInput } from './contest-count-order-by-aggregate.input';
import { ContestAvgOrderByAggregateInput } from './contest-avg-order-by-aggregate.input';
import { ContestMaxOrderByAggregateInput } from './contest-max-order-by-aggregate.input';
import { ContestMinOrderByAggregateInput } from './contest-min-order-by-aggregate.input';
import { ContestSumOrderByAggregateInput } from './contest-sum-order-by-aggregate.input';

@InputType()
export class ContestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    endDate?: `${SortOrder}`;

    @Field(() => ContestCountOrderByAggregateInput, {nullable:true})
    _count?: ContestCountOrderByAggregateInput;

    @Field(() => ContestAvgOrderByAggregateInput, {nullable:true})
    _avg?: ContestAvgOrderByAggregateInput;

    @Field(() => ContestMaxOrderByAggregateInput, {nullable:true})
    _max?: ContestMaxOrderByAggregateInput;

    @Field(() => ContestMinOrderByAggregateInput, {nullable:true})
    _min?: ContestMinOrderByAggregateInput;

    @Field(() => ContestSumOrderByAggregateInput, {nullable:true})
    _sum?: ContestSumOrderByAggregateInput;
}
