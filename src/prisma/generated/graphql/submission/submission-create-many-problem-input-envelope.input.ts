import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateManyProblemInput } from './submission-create-many-problem.input';
import { Type } from 'class-transformer';

@InputType()
export class SubmissionCreateManyProblemInputEnvelope {

    @Field(() => [SubmissionCreateManyProblemInput], {nullable:false})
    @Type(() => SubmissionCreateManyProblemInput)
    data!: Array<SubmissionCreateManyProblemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
