import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ContestOrderByWithRelationInput } from '../contest/contest-order-by-with-relation.input';
import { SubmissionOrderByRelationAggregateInput } from '../submission/submission-order-by-relation-aggregate.input';

@InputType()
export class ProblemOrderByWithRelationInput {

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

    @Field(() => ContestOrderByWithRelationInput, {nullable:true})
    contest?: ContestOrderByWithRelationInput;

    @Field(() => SubmissionOrderByRelationAggregateInput, {nullable:true})
    submissions?: SubmissionOrderByRelationAggregateInput;
}
