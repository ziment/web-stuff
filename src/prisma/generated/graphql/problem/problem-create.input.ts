import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCreateNestedOneWithoutProblemsInput } from '../contest/contest-create-nested-one-without-problems.input';
import { SubmissionCreateNestedManyWithoutProblemInput } from '../submission/submission-create-nested-many-without-problem.input';

@InputType()
export class ProblemCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ContestCreateNestedOneWithoutProblemsInput, {nullable:true})
    contest?: ContestCreateNestedOneWithoutProblemsInput;

    @Field(() => SubmissionCreateNestedManyWithoutProblemInput, {nullable:true})
    submissions?: SubmissionCreateNestedManyWithoutProblemInput;
}
