import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ContestSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
