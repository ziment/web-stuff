import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemUpdateManyMutationInput } from './problem-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProblemWhereInput } from './problem-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProblemArgs {

    @Field(() => ProblemUpdateManyMutationInput, {nullable:false})
    @Type(() => ProblemUpdateManyMutationInput)
    data!: ProblemUpdateManyMutationInput;

    @Field(() => ProblemWhereInput, {nullable:true})
    @Type(() => ProblemWhereInput)
    where?: ProblemWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
