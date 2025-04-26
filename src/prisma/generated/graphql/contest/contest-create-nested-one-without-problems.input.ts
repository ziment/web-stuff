import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCreateWithoutProblemsInput } from './contest-create-without-problems.input';
import { Type } from 'class-transformer';
import { ContestCreateOrConnectWithoutProblemsInput } from './contest-create-or-connect-without-problems.input';
import { Prisma } from '@prisma/client';
import { ContestWhereUniqueInput } from './contest-where-unique.input';

@InputType()
export class ContestCreateNestedOneWithoutProblemsInput {

    @Field(() => ContestCreateWithoutProblemsInput, {nullable:true})
    @Type(() => ContestCreateWithoutProblemsInput)
    create?: ContestCreateWithoutProblemsInput;

    @Field(() => ContestCreateOrConnectWithoutProblemsInput, {nullable:true})
    @Type(() => ContestCreateOrConnectWithoutProblemsInput)
    connectOrCreate?: ContestCreateOrConnectWithoutProblemsInput;

    @Field(() => ContestWhereUniqueInput, {nullable:true})
    @Type(() => ContestWhereUniqueInput)
    connect?: Prisma.AtLeast<ContestWhereUniqueInput, 'id'>;
}
