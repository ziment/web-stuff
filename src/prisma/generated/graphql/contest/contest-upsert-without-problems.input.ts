import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestUpdateWithoutProblemsInput } from './contest-update-without-problems.input';
import { Type } from 'class-transformer';
import { ContestCreateWithoutProblemsInput } from './contest-create-without-problems.input';
import { ContestWhereInput } from './contest-where.input';

@InputType()
export class ContestUpsertWithoutProblemsInput {

    @Field(() => ContestUpdateWithoutProblemsInput, {nullable:false})
    @Type(() => ContestUpdateWithoutProblemsInput)
    update!: ContestUpdateWithoutProblemsInput;

    @Field(() => ContestCreateWithoutProblemsInput, {nullable:false})
    @Type(() => ContestCreateWithoutProblemsInput)
    create!: ContestCreateWithoutProblemsInput;

    @Field(() => ContestWhereInput, {nullable:true})
    @Type(() => ContestWhereInput)
    where?: ContestWhereInput;
}
