import { registerEnumType } from '@nestjs/graphql';

export enum ProblemScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    contestId = "contestId"
}


registerEnumType(ProblemScalarFieldEnum, { name: 'ProblemScalarFieldEnum', description: undefined })
