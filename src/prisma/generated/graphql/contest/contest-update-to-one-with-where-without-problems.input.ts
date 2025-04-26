import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestWhereInput } from './contest-where.input';
import { Type } from 'class-transformer';
import { ContestUpdateWithoutProblemsInput } from './contest-update-without-problems.input';

@InputType()
export class ContestUpdateToOneWithWhereWithoutProblemsInput {

    @Field(() => ContestWhereInput, {nullable:true})
    @Type(() => ContestWhereInput)
    where?: ContestWhereInput;

    @Field(() => ContestUpdateWithoutProblemsInput, {nullable:false})
    @Type(() => ContestUpdateWithoutProblemsInput)
    data!: ContestUpdateWithoutProblemsInput;
}
