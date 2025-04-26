import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProblemListRelationFilter } from '../problem/problem-list-relation-filter.input';

@InputType()
export class ContestWhereInput {

    @Field(() => [ContestWhereInput], {nullable:true})
    AND?: Array<ContestWhereInput>;

    @Field(() => [ContestWhereInput], {nullable:true})
    OR?: Array<ContestWhereInput>;

    @Field(() => [ContestWhereInput], {nullable:true})
    NOT?: Array<ContestWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;

    @Field(() => ProblemListRelationFilter, {nullable:true})
    problems?: ProblemListRelationFilter;
}
