import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateWithoutProblemInput } from './submission-create-without-problem.input';
import { Type } from 'class-transformer';
import { SubmissionCreateOrConnectWithoutProblemInput } from './submission-create-or-connect-without-problem.input';
import { SubmissionUpsertWithWhereUniqueWithoutProblemInput } from './submission-upsert-with-where-unique-without-problem.input';
import { SubmissionCreateManyProblemInputEnvelope } from './submission-create-many-problem-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { SubmissionUpdateWithWhereUniqueWithoutProblemInput } from './submission-update-with-where-unique-without-problem.input';
import { SubmissionUpdateManyWithWhereWithoutProblemInput } from './submission-update-many-with-where-without-problem.input';
import { SubmissionScalarWhereInput } from './submission-scalar-where.input';

@InputType()
export class SubmissionUncheckedUpdateManyWithoutProblemNestedInput {

    @Field(() => [SubmissionCreateWithoutProblemInput], {nullable:true})
    @Type(() => SubmissionCreateWithoutProblemInput)
    create?: Array<SubmissionCreateWithoutProblemInput>;

    @Field(() => [SubmissionCreateOrConnectWithoutProblemInput], {nullable:true})
    @Type(() => SubmissionCreateOrConnectWithoutProblemInput)
    connectOrCreate?: Array<SubmissionCreateOrConnectWithoutProblemInput>;

    @Field(() => [SubmissionUpsertWithWhereUniqueWithoutProblemInput], {nullable:true})
    @Type(() => SubmissionUpsertWithWhereUniqueWithoutProblemInput)
    upsert?: Array<SubmissionUpsertWithWhereUniqueWithoutProblemInput>;

    @Field(() => SubmissionCreateManyProblemInputEnvelope, {nullable:true})
    @Type(() => SubmissionCreateManyProblemInputEnvelope)
    createMany?: SubmissionCreateManyProblemInputEnvelope;

    @Field(() => [SubmissionWhereUniqueInput], {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>>;

    @Field(() => [SubmissionWhereUniqueInput], {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>>;

    @Field(() => [SubmissionWhereUniqueInput], {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>>;

    @Field(() => [SubmissionWhereUniqueInput], {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>>;

    @Field(() => [SubmissionUpdateWithWhereUniqueWithoutProblemInput], {nullable:true})
    @Type(() => SubmissionUpdateWithWhereUniqueWithoutProblemInput)
    update?: Array<SubmissionUpdateWithWhereUniqueWithoutProblemInput>;

    @Field(() => [SubmissionUpdateManyWithWhereWithoutProblemInput], {nullable:true})
    @Type(() => SubmissionUpdateManyWithWhereWithoutProblemInput)
    updateMany?: Array<SubmissionUpdateManyWithWhereWithoutProblemInput>;

    @Field(() => [SubmissionScalarWhereInput], {nullable:true})
    @Type(() => SubmissionScalarWhereInput)
    deleteMany?: Array<SubmissionScalarWhereInput>;
}
