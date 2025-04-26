import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateManyContestInput } from './problem-create-many-contest.input';
import { Type } from 'class-transformer';

@InputType()
export class ProblemCreateManyContestInputEnvelope {

    @Field(() => [ProblemCreateManyContestInput], {nullable:false})
    @Type(() => ProblemCreateManyContestInput)
    data!: Array<ProblemCreateManyContestInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
