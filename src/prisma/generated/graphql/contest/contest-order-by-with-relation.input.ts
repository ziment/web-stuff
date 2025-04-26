import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProblemOrderByRelationAggregateInput } from '../problem/problem-order-by-relation-aggregate.input';

@InputType()
export class ContestOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    endDate?: `${SortOrder}`;

    @Field(() => ProblemOrderByRelationAggregateInput, {nullable:true})
    problems?: ProblemOrderByRelationAggregateInput;
}
