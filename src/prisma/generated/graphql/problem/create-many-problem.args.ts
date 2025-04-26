import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemCreateManyInput } from './problem-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProblemArgs {

    @Field(() => [ProblemCreateManyInput], {nullable:false})
    @Type(() => ProblemCreateManyInput)
    data!: Array<ProblemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
