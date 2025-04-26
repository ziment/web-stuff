import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateArticleDto {
  @Field({ nullable: true })
  @ApiProperty({
    description: "Article title",
    example: "Summer Programming Contest 2024",
    required: false,
  })
  @IsString()
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @ApiProperty({
    description: "Article content",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    required: false,
  })
  @IsString()
  @IsOptional()
  content?: string;
}
