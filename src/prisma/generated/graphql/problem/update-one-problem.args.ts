import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemUpdateInput } from './problem-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';

@ArgsType()
export class UpdateOneProblemArgs {

    @Field(() => ProblemUpdateInput, {nullable:false})
    @Type(() => ProblemUpdateInput)
    data!: ProblemUpdateInput;

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    @Type(() => ProblemWhereUniqueInput)
    where!: Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>;
}
