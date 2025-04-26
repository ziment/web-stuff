import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemUpdateWithoutSubmissionsInput } from './problem-update-without-submissions.input';
import { Type } from 'class-transformer';
import { ProblemCreateWithoutSubmissionsInput } from './problem-create-without-submissions.input';
import { ProblemWhereInput } from './problem-where.input';

@InputType()
export class ProblemUpsertWithoutSubmissionsInput {

    @Field(() => ProblemUpdateWithoutSubmissionsInput, {nullable:false})
    @Type(() => ProblemUpdateWithoutSubmissionsInput)
    update!: ProblemUpdateWithoutSubmissionsInput;

    @Field(() => ProblemCreateWithoutSubmissionsInput, {nullable:false})
    @Type(() => ProblemCreateWithoutSubmissionsInput)
    create!: ProblemCreateWithoutSubmissionsInput;

    @Field(() => ProblemWhereInput, {nullable:true})
    @Type(() => ProblemWhereInput)
    where?: ProblemWhereInput;
}
