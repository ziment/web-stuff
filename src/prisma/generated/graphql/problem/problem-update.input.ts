import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ContestUpdateOneWithoutProblemsNestedInput } from '../contest/contest-update-one-without-problems-nested.input';
import { SubmissionUpdateManyWithoutProblemNestedInput } from '../submission/submission-update-many-without-problem-nested.input';

@InputType()
export class ProblemUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ContestUpdateOneWithoutProblemsNestedInput, {nullable:true})
    contest?: ContestUpdateOneWithoutProblemsNestedInput;

    @Field(() => SubmissionUpdateManyWithoutProblemNestedInput, {nullable:true})
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput;
}
