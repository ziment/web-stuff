import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateWithoutProblemInput } from './submission-create-without-problem.input';
import { Type } from 'class-transformer';
import { SubmissionCreateOrConnectWithoutProblemInput } from './submission-create-or-connect-without-problem.input';
import { SubmissionCreateManyProblemInputEnvelope } from './submission-create-many-problem-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';

@InputType()
export class SubmissionCreateNestedManyWithoutProblemInput {

    @Field(() => [SubmissionCreateWithoutProblemInput], {nullable:true})
    @Type(() => SubmissionCreateWithoutProblemInput)
    create?: Array<SubmissionCreateWithoutProblemInput>;

    @Field(() => [SubmissionCreateOrConnectWithoutProblemInput], {nullable:true})
    @Type(() => SubmissionCreateOrConnectWithoutProblemInput)
    connectOrCreate?: Array<SubmissionCreateOrConnectWithoutProblemInput>;

    @Field(() => SubmissionCreateManyProblemInputEnvelope, {nullable:true})
    @Type(() => SubmissionCreateManyProblemInputEnvelope)
    createMany?: SubmissionCreateManyProblemInputEnvelope;

    @Field(() => [SubmissionWhereUniqueInput], {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>>;
}
