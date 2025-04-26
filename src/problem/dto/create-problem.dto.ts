import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";

@InputType()
export class CreateProblemDto {
  @Field()
  @ApiProperty({ description: "Problem title", example: "Two Sum" })
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field()
  @ApiProperty({
    description: "Problem description",
    example: "Given an array of integers...",
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @Field()
  @ApiProperty({
    description: "Contest ID this problem belongs to",
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  contestId: number;
}
