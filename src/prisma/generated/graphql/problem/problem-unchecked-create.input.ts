import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubmissionUncheckedCreateNestedManyWithoutProblemInput } from '../submission/submission-unchecked-create-nested-many-without-problem.input';

@InputType()
export class ProblemUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    contestId?: number;

    @Field(() => SubmissionUncheckedCreateNestedManyWithoutProblemInput, {nullable:true})
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput;
}
