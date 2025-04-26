import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemWhereInput } from './problem-where.input';

@InputType()
export class ProblemScalarRelationFilter {

    @Field(() => ProblemWhereInput, {nullable:true})
    is?: ProblemWhereInput;

    @Field(() => ProblemWhereInput, {nullable:true})
    isNot?: ProblemWhereInput;
}
