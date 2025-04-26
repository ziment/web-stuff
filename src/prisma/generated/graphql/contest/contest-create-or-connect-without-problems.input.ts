import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContestWhereUniqueInput } from './contest-where-unique.input';
import { Type } from 'class-transformer';
import { ContestCreateWithoutProblemsInput } from './contest-create-without-problems.input';

@InputType()
export class ContestCreateOrConnectWithoutProblemsInput {

    @Field(() => ContestWhereUniqueInput, {nullable:false})
    @Type(() => ContestWhereUniqueInput)
    where!: Prisma.AtLeast<ContestWhereUniqueInput, 'id'>;

    @Field(() => ContestCreateWithoutProblemsInput, {nullable:false})
    @Type(() => ContestCreateWithoutProblemsInput)
    create!: ContestCreateWithoutProblemsInput;
}
