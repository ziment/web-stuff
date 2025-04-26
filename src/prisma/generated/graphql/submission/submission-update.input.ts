import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProblemUpdateOneRequiredWithoutSubmissionsNestedInput } from '../problem/problem-update-one-required-without-submissions-nested.input';
import { UserUpdateOneRequiredWithoutSubmissionsNestedInput } from '../user/user-update-one-required-without-submissions-nested.input';

@InputType()
export class SubmissionUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileUrl?: StringFieldUpdateOperationsInput;

    @Field(() => ProblemUpdateOneRequiredWithoutSubmissionsNestedInput, {nullable:true})
    problem?: ProblemUpdateOneRequiredWithoutSubmissionsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutSubmissionsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput;
}
