import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";

@InputType()
export class UpdateContestDto {
  @Field({ nullable: true })
  @ApiProperty({
    description: "Contest name",
    example: "Summer Programming Contest 2024",
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @ApiProperty({
    description: "Contest start date",
    example: "2024-06-01T00:00:00Z",
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  startDate?: Date;

  @Field({ nullable: true })
  @ApiProperty({
    description: "Contest end date",
    example: "2024-06-30T23:59:59Z",
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  endDate?: Date;
}
