import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContestWhereUniqueInput } from './contest-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueContestOrThrowArgs {

    @Field(() => ContestWhereUniqueInput, {nullable:false})
    @Type(() => ContestWhereUniqueInput)
    where!: Prisma.AtLeast<ContestWhereUniqueInput, 'id'>;
}
