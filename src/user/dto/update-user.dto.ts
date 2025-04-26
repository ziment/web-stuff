import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

@InputType()
export class UpdateUserDto {
  @Field({ nullable: true })
  @ApiProperty({
    description: "User email address",
    example: "user@example.com",
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @ApiProperty({
    description: "User password",
    example: "password123",
    minLength: 8,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MinLength(8)
  password?: string;

  @Field({ nullable: true })
  @ApiProperty({
    description: "User name",
    example: "John Doe",
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;
}
