import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestUpdateManyMutationInput } from './contest-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ContestWhereInput } from './contest-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyContestArgs {

    @Field(() => ContestUpdateManyMutationInput, {nullable:false})
    @Type(() => ContestUpdateManyMutationInput)
    data!: ContestUpdateManyMutationInput;

    @Field(() => ContestWhereInput, {nullable:true})
    @Type(() => ContestWhereInput)
    where?: ContestWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
