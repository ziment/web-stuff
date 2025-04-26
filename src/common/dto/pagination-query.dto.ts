import { IsOptional, IsInt, Min } from "class-validator";
import { Type } from "class-transformer";
import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class PaginationQueryDto {
  @Field(() => Int, { nullable: true, defaultValue: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @Field(() => Int, { nullable: true, defaultValue: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10;
}
