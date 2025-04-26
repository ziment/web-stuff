import { registerEnumType } from '@nestjs/graphql';

export enum ContestScalarFieldEnum {
    id = "id",
    name = "name",
    startDate = "startDate",
    endDate = "endDate"
}


registerEnumType(ContestScalarFieldEnum, { name: 'ContestScalarFieldEnum', description: undefined })
