import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContestWhereUniqueInput } from './contest-where-unique.input';
import { Type } from 'class-transformer';
import { ContestCreateInput } from './contest-create.input';
import { ContestUpdateInput } from './contest-update.input';

@ArgsType()
export class UpsertOneContestArgs {

    @Field(() => ContestWhereUniqueInput, {nullable:false})
    @Type(() => ContestWhereUniqueInput)
    where!: Prisma.AtLeast<ContestWhereUniqueInput, 'id'>;

    @Field(() => ContestCreateInput, {nullable:false})
    @Type(() => ContestCreateInput)
    create!: ContestCreateInput;

    @Field(() => ContestUpdateInput, {nullable:false})
    @Type(() => ContestUpdateInput)
    update!: ContestUpdateInput;
}
