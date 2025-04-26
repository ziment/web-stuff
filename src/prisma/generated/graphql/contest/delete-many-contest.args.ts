import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestWhereInput } from './contest-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyContestArgs {

    @Field(() => ContestWhereInput, {nullable:true})
    @Type(() => ContestWhereInput)
    where?: ContestWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
