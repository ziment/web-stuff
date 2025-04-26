import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProblemUncheckedCreateNestedManyWithoutContestInput } from '../problem/problem-unchecked-create-nested-many-without-contest.input';

@InputType()
export class ContestUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => ProblemUncheckedCreateNestedManyWithoutContestInput, {nullable:true})
    problems?: ProblemUncheckedCreateNestedManyWithoutContestInput;
}
