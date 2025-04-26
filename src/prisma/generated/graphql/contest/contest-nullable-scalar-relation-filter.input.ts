import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestWhereInput } from './contest-where.input';

@InputType()
export class ContestNullableScalarRelationFilter {

    @Field(() => ContestWhereInput, {nullable:true})
    is?: ContestWhereInput;

    @Field(() => ContestWhereInput, {nullable:true})
    isNot?: ContestWhereInput;
}
