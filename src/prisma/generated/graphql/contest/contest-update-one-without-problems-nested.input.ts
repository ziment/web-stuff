import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCreateWithoutProblemsInput } from './contest-create-without-problems.input';
import { Type } from 'class-transformer';
import { ContestCreateOrConnectWithoutProblemsInput } from './contest-create-or-connect-without-problems.input';
import { ContestUpsertWithoutProblemsInput } from './contest-upsert-without-problems.input';
import { ContestWhereInput } from './contest-where.input';
import { Prisma } from '@prisma/client';
import { ContestWhereUniqueInput } from './contest-where-unique.input';
import { ContestUpdateToOneWithWhereWithoutProblemsInput } from './contest-update-to-one-with-where-without-problems.input';

@InputType()
export class ContestUpdateOneWithoutProblemsNestedInput {

    @Field(() => ContestCreateWithoutProblemsInput, {nullable:true})
    @Type(() => ContestCreateWithoutProblemsInput)
    create?: ContestCreateWithoutProblemsInput;

    @Field(() => ContestCreateOrConnectWithoutProblemsInput, {nullable:true})
    @Type(() => ContestCreateOrConnectWithoutProblemsInput)
    connectOrCreate?: ContestCreateOrConnectWithoutProblemsInput;

    @Field(() => ContestUpsertWithoutProblemsInput, {nullable:true})
    @Type(() => ContestUpsertWithoutProblemsInput)
    upsert?: ContestUpsertWithoutProblemsInput;

    @Field(() => ContestWhereInput, {nullable:true})
    @Type(() => ContestWhereInput)
    disconnect?: ContestWhereInput;

    @Field(() => ContestWhereInput, {nullable:true})
    @Type(() => ContestWhereInput)
    delete?: ContestWhereInput;

    @Field(() => ContestWhereUniqueInput, {nullable:true})
    @Type(() => ContestWhereUniqueInput)
    connect?: Prisma.AtLeast<ContestWhereUniqueInput, 'id'>;

    @Field(() => ContestUpdateToOneWithWhereWithoutProblemsInput, {nullable:true})
    @Type(() => ContestUpdateToOneWithWhereWithoutProblemsInput)
    update?: ContestUpdateToOneWithWhereWithoutProblemsInput;
}
