import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Contest } from '../contest/contest.model';
import { Submission } from '../submission/submission.model';
import { ProblemCount } from './problem-count.output';

@ObjectType()
export class Problem {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:true})
    contestId!: number | null;

    @Field(() => Contest, {nullable:true})
    contest?: Contest | null;

    @Field(() => [Submission], {nullable:true})
    submissions?: Array<Submission>;

    @Field(() => ProblemCount, {nullable:false})
    _count?: ProblemCount;
}
