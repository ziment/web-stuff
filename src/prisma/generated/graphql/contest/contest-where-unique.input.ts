import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ContestWhereInput } from './contest-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProblemListRelationFilter } from '../problem/problem-list-relation-filter.input';

@InputType()
export class ContestWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ContestWhereInput], {nullable:true})
    AND?: Array<ContestWhereInput>;

    @Field(() => [ContestWhereInput], {nullable:true})
    OR?: Array<ContestWhereInput>;

    @Field(() => [ContestWhereInput], {nullable:true})
    NOT?: Array<ContestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;

    @Field(() => ProblemListRelationFilter, {nullable:true})
    problems?: ProblemListRelationFilter;
}
