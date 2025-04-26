import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SubmissionCountOrderByAggregateInput } from './submission-count-order-by-aggregate.input';
import { SubmissionAvgOrderByAggregateInput } from './submission-avg-order-by-aggregate.input';
import { SubmissionMaxOrderByAggregateInput } from './submission-max-order-by-aggregate.input';
import { SubmissionMinOrderByAggregateInput } from './submission-min-order-by-aggregate.input';
import { SubmissionSumOrderByAggregateInput } from './submission-sum-order-by-aggregate.input';

@InputType()
export class SubmissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    problemId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fileUrl?: `${SortOrder}`;

    @Field(() => SubmissionCountOrderByAggregateInput, {nullable:true})
    _count?: SubmissionCountOrderByAggregateInput;

    @Field(() => SubmissionAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubmissionAvgOrderByAggregateInput;

    @Field(() => SubmissionMaxOrderByAggregateInput, {nullable:true})
    _max?: SubmissionMaxOrderByAggregateInput;

    @Field(() => SubmissionMinOrderByAggregateInput, {nullable:true})
    _min?: SubmissionMinOrderByAggregateInput;

    @Field(() => SubmissionSumOrderByAggregateInput, {nullable:true})
    _sum?: SubmissionSumOrderByAggregateInput;
}
