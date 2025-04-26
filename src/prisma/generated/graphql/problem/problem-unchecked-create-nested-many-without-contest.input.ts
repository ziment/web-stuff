import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateWithoutContestInput } from './problem-create-without-contest.input';
import { Type } from 'class-transformer';
import { ProblemCreateOrConnectWithoutContestInput } from './problem-create-or-connect-without-contest.input';
import { ProblemCreateManyContestInputEnvelope } from './problem-create-many-contest-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';

@InputType()
export class ProblemUncheckedCreateNestedManyWithoutContestInput {

    @Field(() => [ProblemCreateWithoutContestInput], {nullable:true})
    @Type(() => ProblemCreateWithoutContestInput)
    create?: Array<ProblemCreateWithoutContestInput>;

    @Field(() => [ProblemCreateOrConnectWithoutContestInput], {nullable:true})
    @Type(() => ProblemCreateOrConnectWithoutContestInput)
    connectOrCreate?: Array<ProblemCreateOrConnectWithoutContestInput>;

    @Field(() => ProblemCreateManyContestInputEnvelope, {nullable:true})
    @Type(() => ProblemCreateManyContestInputEnvelope)
    createMany?: ProblemCreateManyContestInputEnvelope;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    @Type(() => ProblemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>>;
}
