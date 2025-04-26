import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSubmissionsInput } from '../user/user-create-nested-one-without-submissions.input';

@InputType()
export class SubmissionCreateWithoutProblemInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    fileUrl!: string;

    @Field(() => UserCreateNestedOneWithoutSubmissionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSubmissionsInput;
}
