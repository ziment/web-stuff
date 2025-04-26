import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateNestedOneWithoutSubmissionsInput } from '../problem/problem-create-nested-one-without-submissions.input';
import { UserCreateNestedOneWithoutSubmissionsInput } from '../user/user-create-nested-one-without-submissions.input';

@InputType()
export class SubmissionCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    fileUrl!: string;

    @Field(() => ProblemCreateNestedOneWithoutSubmissionsInput, {nullable:false})
    problem!: ProblemCreateNestedOneWithoutSubmissionsInput;

    @Field(() => UserCreateNestedOneWithoutSubmissionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSubmissionsInput;
}
