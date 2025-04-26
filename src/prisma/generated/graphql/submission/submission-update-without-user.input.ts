import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProblemUpdateOneRequiredWithoutSubmissionsNestedInput } from '../problem/problem-update-one-required-without-submissions-nested.input';

@InputType()
export class SubmissionUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileUrl?: StringFieldUpdateOperationsInput;

    @Field(() => ProblemUpdateOneRequiredWithoutSubmissionsNestedInput, {nullable:true})
    problem?: ProblemUpdateOneRequiredWithoutSubmissionsNestedInput;
}
