import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class SubmissionScalarWhereInput {

    @Field(() => [SubmissionScalarWhereInput], {nullable:true})
    AND?: Array<SubmissionScalarWhereInput>;

    @Field(() => [SubmissionScalarWhereInput], {nullable:true})
    OR?: Array<SubmissionScalarWhereInput>;

    @Field(() => [SubmissionScalarWhereInput], {nullable:true})
    NOT?: Array<SubmissionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    problemId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    fileUrl?: StringFilter;
}
