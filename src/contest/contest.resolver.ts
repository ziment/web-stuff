import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ContestService } from "./contest.service";
import { CreateContestDto } from "./dto/create-contest.dto";
import { UpdateContestDto } from "./dto/update-contest.dto";
import { Contest } from "../prisma/generated/graphql";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";

@Resolver(() => Contest)
export class ContestResolver {
  constructor(private readonly contestService: ContestService) {}

  @Query(() => Contest, { nullable: true })
  async contest(@Args("id") id: number) {
    return this.contestService.findOne(id);
  }

  @Query(() => [Contest])
  async contests(@Args("paginationQuery") paginationQuery: PaginationQueryDto) {
    const result = await this.contestService.findAll(paginationQuery);
    return result.contests;
  }

  @Mutation(() => Contest)
  async createContest(@Args("input") input: CreateContestDto) {
    return this.contestService.create(input);
  }

  @Mutation(() => Contest)
  async updateContest(
    @Args("id") id: number,
    @Args("input") input: UpdateContestDto,
  ) {
    return this.contestService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteContest(@Args("id") id: number) {
    await this.contestService.remove(id);
    return true;
  }
}
