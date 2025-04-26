import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { Type } from 'class-transformer';
import { ProblemCreateWithoutContestInput } from './problem-create-without-contest.input';

@InputType()
export class ProblemCreateOrConnectWithoutContestInput {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    @Type(() => ProblemWhereUniqueInput)
    where!: Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>;

    @Field(() => ProblemCreateWithoutContestInput, {nullable:false})
    @Type(() => ProblemCreateWithoutContestInput)
    create!: ProblemCreateWithoutContestInput;
}
