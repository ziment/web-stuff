import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemCreateInput } from './problem-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProblemArgs {

    @Field(() => ProblemCreateInput, {nullable:false})
    @Type(() => ProblemCreateInput)
    data!: ProblemCreateInput;
}
