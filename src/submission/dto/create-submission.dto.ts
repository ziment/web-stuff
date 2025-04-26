import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsInt } from "class-validator";

@InputType()
export class CreateSubmissionDto {
  @Field()
  @ApiProperty({ description: "Problem ID", example: 1 })
  @IsInt()
  @IsNotEmpty()
  problemId: number;

  @Field()
  @ApiProperty({ description: "User ID", example: 1 })
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @Field()
  @ApiProperty({
    description: "File URL in S3",
    example: "submissions/1/1/1234567890-solution.cpp",
  })
  @IsString()
  @IsNotEmpty()
  fileUrl: string;
}
