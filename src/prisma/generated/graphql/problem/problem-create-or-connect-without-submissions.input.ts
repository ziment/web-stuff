import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { Type } from 'class-transformer';
import { ProblemCreateWithoutSubmissionsInput } from './problem-create-without-submissions.input';

@InputType()
export class ProblemCreateOrConnectWithoutSubmissionsInput {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    @Type(() => ProblemWhereUniqueInput)
    where!: Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>;

    @Field(() => ProblemCreateWithoutSubmissionsInput, {nullable:false})
    @Type(() => ProblemCreateWithoutSubmissionsInput)
    create!: ProblemCreateWithoutSubmissionsInput;
}
