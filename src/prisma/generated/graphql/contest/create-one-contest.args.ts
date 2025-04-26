import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestCreateInput } from './contest-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneContestArgs {

    @Field(() => ContestCreateInput, {nullable:false})
    @Type(() => ContestCreateInput)
    data!: ContestCreateInput;
}
