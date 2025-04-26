import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ContestNullableScalarRelationFilter } from '../contest/contest-nullable-scalar-relation-filter.input';
import { SubmissionListRelationFilter } from '../submission/submission-list-relation-filter.input';

@InputType()
export class ProblemWhereInput {

    @Field(() => [ProblemWhereInput], {nullable:true})
    AND?: Array<ProblemWhereInput>;

    @Field(() => [ProblemWhereInput], {nullable:true})
    OR?: Array<ProblemWhereInput>;

    @Field(() => [ProblemWhereInput], {nullable:true})
    NOT?: Array<ProblemWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
