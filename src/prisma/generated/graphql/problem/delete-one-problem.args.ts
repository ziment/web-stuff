import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneProblemArgs {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    @Type(() => ProblemWhereUniqueInput)
    where!: Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>;
}
