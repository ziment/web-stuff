import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemWhereInput } from './problem-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyProblemArgs {

    @Field(() => ProblemWhereInput, {nullable:true})
    @Type(() => ProblemWhereInput)
    where?: ProblemWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
