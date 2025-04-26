import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateNestedManyWithoutContestInput } from '../problem/problem-create-nested-many-without-contest.input';

@InputType()
export class ContestCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => ProblemCreateNestedManyWithoutContestInput, {nullable:true})
    problems?: ProblemCreateNestedManyWithoutContestInput;
}
