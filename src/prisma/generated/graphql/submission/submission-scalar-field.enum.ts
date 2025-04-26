import { registerEnumType } from '@nestjs/graphql';

export enum SubmissionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    userId = "userId",
    problemId = "problemId",
    fileUrl = "fileUrl"
}


registerEnumType(SubmissionScalarFieldEnum, { name: 'SubmissionScalarFieldEnum', description: undefined })
