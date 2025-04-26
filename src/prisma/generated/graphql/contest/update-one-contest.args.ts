import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestUpdateInput } from './contest-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ContestWhereUniqueInput } from './contest-where-unique.input';

@ArgsType()
export class UpdateOneContestArgs {

    @Field(() => ContestUpdateInput, {nullable:false})
    @Type(() => ContestUpdateInput)
    data!: ContestUpdateInput;

    @Field(() => ContestWhereUniqueInput, {nullable:false})
    @Type(() => ContestWhereUniqueInput)
    where!: Prisma.AtLeast<ContestWhereUniqueInput, 'id'>;
}
