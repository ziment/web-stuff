import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateWithoutContestInput } from './problem-create-without-contest.input';
import { Type } from 'class-transformer';
import { ProblemCreateOrConnectWithoutContestInput } from './problem-create-or-connect-without-contest.input';
import { ProblemUpsertWithWhereUniqueWithoutContestInput } from './problem-upsert-with-where-unique-without-contest.input';
import { ProblemCreateManyContestInputEnvelope } from './problem-create-many-contest-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { ProblemUpdateWithWhereUniqueWithoutContestInput } from './problem-update-with-where-unique-without-contest.input';
import { ProblemUpdateManyWithWhereWithoutContestInput } from './problem-update-many-with-where-without-contest.input';
import { ProblemScalarWhereInput } from './problem-scalar-where.input';

@InputType()
export class ProblemUncheckedUpdateManyWithoutContestNestedInput {

    @Field(() => [ProblemCreateWithoutContestInput], {nullable:true})
    @Type(() => ProblemCreateWithoutContestInput)
    create?: Array<ProblemCreateWithoutContestInput>;

    @Field(() => [ProblemCreateOrConnectWithoutContestInput], {nullable:true})
    @Type(() => ProblemCreateOrConnectWithoutContestInput)
    connectOrCreate?: Array<ProblemCreateOrConnectWithoutContestInput>;

    @Field(() => [ProblemUpsertWithWhereUniqueWithoutContestInput], {nullable:true})
    @Type(() => ProblemUpsertWithWhereUniqueWithoutContestInput)
    upsert?: Array<ProblemUpsertWithWhereUniqueWithoutContestInput>;

    @Field(() => ProblemCreateManyContestInputEnvelope, {nullable:true})
    @Type(() => ProblemCreateManyContestInputEnvelope)
    createMany?: ProblemCreateManyContestInputEnvelope;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    @Type(() => ProblemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>>;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    @Type(() => ProblemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>>;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    @Type(() => ProblemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>>;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    @Type(() => ProblemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>>;

    @Field(() => [ProblemUpdateWithWhereUniqueWithoutContestInput], {nullable:true})
    @Type(() => ProblemUpdateWithWhereUniqueWithoutContestInput)
    update?: Array<ProblemUpdateWithWhereUniqueWithoutContestInput>;

    @Field(() => [ProblemUpdateManyWithWhereWithoutContestInput], {nullable:true})
    @Type(() => ProblemUpdateManyWithWhereWithoutContestInput)
    updateMany?: Array<ProblemUpdateManyWithWhereWithoutContestInput>;

    @Field(() => [ProblemScalarWhereInput], {nullable:true})
    @Type(() => ProblemScalarWhereInput)
    deleteMany?: Array<ProblemScalarWhereInput>;
}
