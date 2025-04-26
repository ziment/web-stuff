import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { Type } from 'class-transformer';
import { ProblemUpdateWithoutContestInput } from './problem-update-without-contest.input';

@InputType()
export class ProblemUpdateWithWhereUniqueWithoutContestInput {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    @Type(() => ProblemWhereUniqueInput)
    where!: Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>;

    @Field(() => ProblemUpdateWithoutContestInput, {nullable:false})
    @Type(() => ProblemUpdateWithoutContestInput)
    data!: ProblemUpdateWithoutContestInput;
}
