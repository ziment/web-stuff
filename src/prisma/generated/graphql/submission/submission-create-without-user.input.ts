import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateNestedOneWithoutSubmissionsInput } from '../problem/problem-create-nested-one-without-submissions.input';

@InputType()
export class SubmissionCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    fileUrl!: string;

    @Field(() => ProblemCreateNestedOneWithoutSubmissionsInput, {nullable:false})
    problem!: ProblemCreateNestedOneWithoutSubmissionsInput;
}
