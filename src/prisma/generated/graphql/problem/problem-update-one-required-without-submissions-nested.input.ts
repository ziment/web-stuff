import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateWithoutSubmissionsInput } from './problem-create-without-submissions.input';
import { Type } from 'class-transformer';
import { ProblemCreateOrConnectWithoutSubmissionsInput } from './problem-create-or-connect-without-submissions.input';
import { ProblemUpsertWithoutSubmissionsInput } from './problem-upsert-without-submissions.input';
import { Prisma } from '@prisma/client';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { ProblemUpdateToOneWithWhereWithoutSubmissionsInput } from './problem-update-to-one-with-where-without-submissions.input';

@InputType()
export class ProblemUpdateOneRequiredWithoutSubmissionsNestedInput {

    @Field(() => ProblemCreateWithoutSubmissionsInput, {nullable:true})
    @Type(() => ProblemCreateWithoutSubmissionsInput)
    create?: ProblemCreateWithoutSubmissionsInput;

    @Field(() => ProblemCreateOrConnectWithoutSubmissionsInput, {nullable:true})
    @Type(() => ProblemCreateOrConnectWithoutSubmissionsInput)
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionsInput;

    @Field(() => ProblemUpsertWithoutSubmissionsInput, {nullable:true})
    @Type(() => ProblemUpsertWithoutSubmissionsInput)
    upsert?: ProblemUpsertWithoutSubmissionsInput;

    @Field(() => ProblemWhereUniqueInput, {nullable:true})
    @Type(() => ProblemWhereUniqueInput)
    connect?: Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>;

    @Field(() => ProblemUpdateToOneWithWhereWithoutSubmissionsInput, {nullable:true})
    @Type(() => ProblemUpdateToOneWithWhereWithoutSubmissionsInput)
    update?: ProblemUpdateToOneWithWhereWithoutSubmissionsInput;
}
