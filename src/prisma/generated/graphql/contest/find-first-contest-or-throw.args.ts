import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestWhereInput } from './contest-where.input';
import { Type } from 'class-transformer';
import { ContestOrderByWithRelationInput } from './contest-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContestWhereUniqueInput } from './contest-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContestScalarFieldEnum } from './contest-scalar-field.enum';

@ArgsType()
export class FindFirstContestOrThrowArgs {

    @Field(() => ContestWhereInput, {nullable:true})
    @Type(() => ContestWhereInput)
    where?: ContestWhereInput;

    @Field(() => [ContestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContestOrderByWithRelationInput>;

    @Field(() => ContestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ContestWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ContestScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ContestScalarFieldEnum}`>;
}
