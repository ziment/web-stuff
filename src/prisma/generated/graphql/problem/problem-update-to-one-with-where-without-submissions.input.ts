import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemWhereInput } from './problem-where.input';
import { Type } from 'class-transformer';
import { ProblemUpdateWithoutSubmissionsInput } from './problem-update-without-submissions.input';

@InputType()
export class ProblemUpdateToOneWithWhereWithoutSubmissionsInput {

    @Field(() => ProblemWhereInput, {nullable:true})
    @Type(() => ProblemWhereInput)
    where?: ProblemWhereInput;

    @Field(() => ProblemUpdateWithoutSubmissionsInput, {nullable:false})
    @Type(() => ProblemUpdateWithoutSubmissionsInput)
    data!: ProblemUpdateWithoutSubmissionsInput;
}
