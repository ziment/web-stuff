import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsInt } from "class-validator";

@InputType()
export class UpdateSubmissionDto {
  @Field({ nullable: true })
  @ApiProperty({
    description: "Submission code",
    example: "function solution() { return 42; }",
    required: false,
  })
  @IsString()
  @IsOptional()
  code?: string;

  @Field({ nullable: true })
  @ApiProperty({
    description: "Problem ID",
    example: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  problemId?: number;

  @Field({ nullable: true })
  @ApiProperty({
    description: "User ID",
    example: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  userId?: number;
}
