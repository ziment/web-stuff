import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { Type } from 'class-transformer';
import { ProblemCreateInput } from './problem-create.input';
import { ProblemUpdateInput } from './problem-update.input';

@ArgsType()
export class UpsertOneProblemArgs {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    @Type(() => ProblemWhereUniqueInput)
    where!: Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>;

    @Field(() => ProblemCreateInput, {nullable:false})
    @Type(() => ProblemCreateInput)
    create!: ProblemCreateInput;

    @Field(() => ProblemUpdateInput, {nullable:false})
    @Type(() => ProblemUpdateInput)
    update!: ProblemUpdateInput;
}
