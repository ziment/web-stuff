import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateWithoutSubmissionsInput } from './problem-create-without-submissions.input';
import { Type } from 'class-transformer';
import { ProblemCreateOrConnectWithoutSubmissionsInput } from './problem-create-or-connect-without-submissions.input';
import { Prisma } from '@prisma/client';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';

@InputType()
export class ProblemCreateNestedOneWithoutSubmissionsInput {

    @Field(() => ProblemCreateWithoutSubmissionsInput, {nullable:true})
    @Type(() => ProblemCreateWithoutSubmissionsInput)
    create?: ProblemCreateWithoutSubmissionsInput;

    @Field(() => ProblemCreateOrConnectWithoutSubmissionsInput, {nullable:true})
    @Type(() => ProblemCreateOrConnectWithoutSubmissionsInput)
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionsInput;

    @Field(() => ProblemWhereUniqueInput, {nullable:true})
    @Type(() => ProblemWhereUniqueInput)
    connect?: Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>;
}
