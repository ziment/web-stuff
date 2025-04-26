import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutSubmissionsNestedInput } from '../user/user-update-one-required-without-submissions-nested.input';

@InputType()
export class SubmissionUpdateWithoutProblemInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileUrl?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutSubmissionsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput;
}
