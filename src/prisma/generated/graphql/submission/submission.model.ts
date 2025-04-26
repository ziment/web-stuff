import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Problem } from '../problem/problem.model';
import { User } from '../user/user.model';

@ObjectType()
export class Submission {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    problemId!: number;

    @Field(() => String, {nullable:false})
    fileUrl!: string;

    @Field(() => Problem, {nullable:false})
    problem?: Problem;

    @Field(() => User, {nullable:false})
    user?: User;
}
