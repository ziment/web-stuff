import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateNestedManyWithoutProblemInput } from '../submission/submission-create-nested-many-without-problem.input';

@InputType()
export class ProblemCreateWithoutContestInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SubmissionCreateNestedManyWithoutProblemInput, {nullable:true})
    submissions?: SubmissionCreateNestedManyWithoutProblemInput;
}
