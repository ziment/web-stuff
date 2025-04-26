import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemScalarWhereInput } from './problem-scalar-where.input';
import { Type } from 'class-transformer';
import { ProblemUpdateManyMutationInput } from './problem-update-many-mutation.input';

@InputType()
export class ProblemUpdateManyWithWhereWithoutContestInput {

    @Field(() => ProblemScalarWhereInput, {nullable:false})
    @Type(() => ProblemScalarWhereInput)
    where!: ProblemScalarWhereInput;

    @Field(() => ProblemUpdateManyMutationInput, {nullable:false})
    @Type(() => ProblemUpdateManyMutationInput)
    data!: ProblemUpdateManyMutationInput;
}
