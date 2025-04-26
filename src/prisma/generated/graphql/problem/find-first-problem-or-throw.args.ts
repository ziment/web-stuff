import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemWhereInput } from './problem-where.input';
import { Type } from 'class-transformer';
import { ProblemOrderByWithRelationInput } from './problem-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProblemScalarFieldEnum } from './problem-scalar-field.enum';

@ArgsType()
export class FindFirstProblemOrThrowArgs {

    @Field(() => ProblemWhereInput, {nullable:true})
    @Type(() => ProblemWhereInput)
    where?: ProblemWhereInput;

    @Field(() => [ProblemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProblemOrderByWithRelationInput>;

    @Field(() => ProblemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProblemWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProblemScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProblemScalarFieldEnum}`>;
}
