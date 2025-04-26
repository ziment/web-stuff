import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubmissionWhereInput } from './submission-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ProblemScalarRelationFilter } from '../problem/problem-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class SubmissionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [SubmissionWhereInput], {nullable:true})
    AND?: Array<SubmissionWhereInput>;

    @Field(() => [SubmissionWhereInput], {nullable:true})
    OR?: Array<SubmissionWhereInput>;

    @Field(() => [SubmissionWhereInput], {nullable:true})
    NOT?: Array<SubmissionWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    problemId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    fileUrl?: StringFilter;

    @Field(() => ProblemScalarRelationFilter, {nullable:true})
    problem?: ProblemScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
