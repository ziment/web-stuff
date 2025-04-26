import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionScalarWhereInput } from './submission-scalar-where.input';
import { Type } from 'class-transformer';
import { SubmissionUpdateManyMutationInput } from './submission-update-many-mutation.input';

@InputType()
export class SubmissionUpdateManyWithWhereWithoutProblemInput {

    @Field(() => SubmissionScalarWhereInput, {nullable:false})
    @Type(() => SubmissionScalarWhereInput)
    where!: SubmissionScalarWhereInput;

    @Field(() => SubmissionUpdateManyMutationInput, {nullable:false})
    @Type(() => SubmissionUpdateManyMutationInput)
    data!: SubmissionUpdateManyMutationInput;
}
