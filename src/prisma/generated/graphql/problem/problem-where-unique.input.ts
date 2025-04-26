import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProblemWhereInput } from './problem-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ContestNullableScalarRelationFilter } from '../contest/contest-nullable-scalar-relation-filter.input';
import { SubmissionListRelationFilter } from '../submission/submission-list-relation-filter.input';

@InputType()
export class ProblemWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ProblemWhereInput], {nullable:true})
    AND?: Array<ProblemWhereInput>;

    @Field(() => [ProblemWhereInput], {nullable:true})
    OR?: Array<ProblemWhereInput>;

    @Field(() => [ProblemWhereInput], {nullable:true})
    NOT?: Array<ProblemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    contestId?: IntNullableFilter;

    @Field(() => ContestNullableScalarRelationFilter, {nullable:true})
    contest?: ContestNullableScalarRelationFilter;

    @Field(() => SubmissionListRelationFilter, {nullable:true})
    submissions?: SubmissionListRelationFilter;
}
