import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class SubmissionScalarWhereWithAggregatesInput {

    @Field(() => [SubmissionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SubmissionScalarWhereWithAggregatesInput>;

    @Field(() => [SubmissionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SubmissionScalarWhereWithAggregatesInput>;

    @Field(() => [SubmissionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SubmissionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    problemId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fileUrl?: StringWithAggregatesFilter;
}
