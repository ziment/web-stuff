import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";

@InputType()
export class CreateContestDto {
  @Field()
  @ApiProperty({
    description: "Contest name",
    example: "Summer Programming Contest 2024",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @ApiProperty({
    description: "Contest start date",
    example: "2024-06-01T00:00:00Z",
  })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  startDate: Date;

  @Field()
  @ApiProperty({
    description: "Contest end date",
    example: "2024-06-30T23:59:59Z",
  })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  endDate: Date;
}
