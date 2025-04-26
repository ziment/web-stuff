import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProblemService } from "./problem.service";
import { CreateProblemDto } from "./dto/create-problem.dto";
import { UpdateProblemDto } from "./dto/update-problem.dto";
import { Problem } from "../prisma/generated/graphql";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";

@Resolver(() => Problem)
export class ProblemResolver {
  constructor(private readonly problemService: ProblemService) {}

  @Query(() => Problem, { nullable: true })
  async problem(@Args("id") id: number) {
    return this.problemService.findOne(id);
  }

  @Query(() => [Problem])
  async problems(@Args("paginationQuery") paginationQuery: PaginationQueryDto) {
    const result = await this.problemService.findAll(paginationQuery);
    return result.problems;
  }

  @Mutation(() => Problem)
  async createProblem(@Args("input") input: CreateProblemDto) {
    return this.problemService.create(input);
  }

  @Mutation(() => Problem)
  async updateProblem(
    @Args("id") id: number,
    @Args("input") input: UpdateProblemDto,
  ) {
    return this.problemService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteProblem(@Args("id") id: number): Promise<boolean> {
    await this.problemService.remove(id);
    return true;
  }
}
