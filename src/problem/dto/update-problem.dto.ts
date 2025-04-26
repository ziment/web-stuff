import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsInt } from "class-validator";

@InputType()
export class UpdateProblemDto {
  @Field({ nullable: true })
  @ApiProperty({
    description: "Problem title",
    example: "Two Sum",
    required: false,
  })
  @IsString()
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @ApiProperty({
    description: "Problem description",
    example: "Given an array of integers...",
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @ApiProperty({
    description: "Contest ID this problem belongs to",
    required: false,
  })
  @IsInt()
  @IsOptional()
  contestId?: number;
}
