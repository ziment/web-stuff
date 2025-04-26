import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ContestScalarWhereWithAggregatesInput {

    @Field(() => [ContestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ContestScalarWhereWithAggregatesInput>;

    @Field(() => [ContestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ContestScalarWhereWithAggregatesInput>;

    @Field(() => [ContestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ContestScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    endDate?: DateTimeWithAggregatesFilter;
}
