import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProblemCount {

    @Field(() => Int, {nullable:false})
    submissions?: number;
}
