import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCreateNestedOneWithoutProblemsInput } from '../contest/contest-create-nested-one-without-problems.input';

@InputType()
export class ProblemCreateWithoutSubmissionsInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ContestCreateNestedOneWithoutProblemsInput, {nullable:true})
    contest?: ContestCreateNestedOneWithoutProblemsInput;
}
