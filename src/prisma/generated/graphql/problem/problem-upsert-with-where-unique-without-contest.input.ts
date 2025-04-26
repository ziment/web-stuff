import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { Type } from 'class-transformer';
import { ProblemUpdateWithoutContestInput } from './problem-update-without-contest.input';
import { ProblemCreateWithoutContestInput } from './problem-create-without-contest.input';

@InputType()
export class ProblemUpsertWithWhereUniqueWithoutContestInput {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    @Type(() => ProblemWhereUniqueInput)
    where!: Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>;

    @Field(() => ProblemUpdateWithoutContestInput, {nullable:false})
    @Type(() => ProblemUpdateWithoutContestInput)
    update!: ProblemUpdateWithoutContestInput;

    @Field(() => ProblemCreateWithoutContestInput, {nullable:false})
    @Type(() => ProblemCreateWithoutContestInput)
    create!: ProblemCreateWithoutContestInput;
}
