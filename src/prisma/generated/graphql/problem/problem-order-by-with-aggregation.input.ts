import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProblemCountOrderByAggregateInput } from './problem-count-order-by-aggregate.input';
import { ProblemAvgOrderByAggregateInput } from './problem-avg-order-by-aggregate.input';
import { ProblemMaxOrderByAggregateInput } from './problem-max-order-by-aggregate.input';
import { ProblemMinOrderByAggregateInput } from './problem-min-order-by-aggregate.input';
import { ProblemSumOrderByAggregateInput } from './problem-sum-order-by-aggregate.input';

@InputType()
export class ProblemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    contestId?: SortOrderInput;

    @Field(() => ProblemCountOrderByAggregateInput, {nullable:true})
    _count?: ProblemCountOrderByAggregateInput;

    @Field(() => ProblemAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProblemAvgOrderByAggregateInput;

    @Field(() => ProblemMaxOrderByAggregateInput, {nullable:true})
    _max?: ProblemMaxOrderByAggregateInput;

    @Field(() => ProblemMinOrderByAggregateInput, {nullable:true})
    _min?: ProblemMinOrderByAggregateInput;

    @Field(() => ProblemSumOrderByAggregateInput, {nullable:true})
    _sum?: ProblemSumOrderByAggregateInput;
}
