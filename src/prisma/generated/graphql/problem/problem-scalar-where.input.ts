import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ProblemScalarWhereInput {

    @Field(() => [ProblemScalarWhereInput], {nullable:true})
    AND?: Array<ProblemScalarWhereInput>;

    @Field(() => [ProblemScalarWhereInput], {nullable:true})
    OR?: Array<ProblemScalarWhereInput>;

    @Field(() => [ProblemScalarWhereInput], {nullable:true})
    NOT?: Array<ProblemScalarWhereInput>;

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
}
