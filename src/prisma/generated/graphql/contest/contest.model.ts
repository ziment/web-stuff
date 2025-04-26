import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Problem } from '../problem/problem.model';
import { ContestCount } from './contest-count.output';

@ObjectType()
export class Contest {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Date, {nullable:false})
    endDate!: Date;

    @Field(() => [Problem], {nullable:true})
    problems?: Array<Problem>;

    @Field(() => ContestCount, {nullable:false})
    _count?: ContestCount;
}
