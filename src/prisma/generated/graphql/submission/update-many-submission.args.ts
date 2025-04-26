import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionUpdateManyMutationInput } from './submission-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubmissionWhereInput } from './submission-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySubmissionArgs {

    @Field(() => SubmissionUpdateManyMutationInput, {nullable:false})
    @Type(() => SubmissionUpdateManyMutationInput)
    data!: SubmissionUpdateManyMutationInput;

    @Field(() => SubmissionWhereInput, {nullable:true})
    @Type(() => SubmissionWhereInput)
    where?: SubmissionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
