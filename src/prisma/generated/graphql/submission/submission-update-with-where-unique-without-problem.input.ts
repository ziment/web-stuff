import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Type } from 'class-transformer';
import { SubmissionUpdateWithoutProblemInput } from './submission-update-without-problem.input';

@InputType()
export class SubmissionUpdateWithWhereUniqueWithoutProblemInput {

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    @Type(() => SubmissionWhereUniqueInput)
    where!: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;

    @Field(() => SubmissionUpdateWithoutProblemInput, {nullable:false})
    @Type(() => SubmissionUpdateWithoutProblemInput)
    data!: SubmissionUpdateWithoutProblemInput;
}
