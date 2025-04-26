import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestCreateManyInput } from './contest-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyContestArgs {

    @Field(() => [ContestCreateManyInput], {nullable:false})
    @Type(() => ContestCreateManyInput)
    data!: Array<ContestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
