import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateArticleDto {
  @Field()
  @ApiProperty({
    description: "Article title",
    example: "Summer Programming Contest 2024",
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field()
  @ApiProperty({
    description: "Article content",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  })
  @IsString()
  @IsNotEmpty()
  content: string;
}
