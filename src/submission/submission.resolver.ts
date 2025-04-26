import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SubmissionService } from "./submission.service";
import { CreateSubmissionDto } from "./dto/create-submission.dto";
import { UpdateSubmissionDto } from "./dto/update-submission.dto";
import { Submission } from "../prisma/generated/graphql";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";

@Resolver(() => Submission)
export class SubmissionResolver {
  constructor(private readonly submissionService: SubmissionService) {}

  @Query(() => Submission, { nullable: true })
  async submission(@Args("id") id: number) {
    return this.submissionService.findOne(id);
  }

  @Query(() => [Submission])
  async submissions(
    @Args("paginationQuery") paginationQuery: PaginationQueryDto,
  ) {
    const result = await this.submissionService.findAll(paginationQuery);
    return result.submissions;
  }

  @Mutation(() => Submission)
  async createSubmission(@Args("input") input: CreateSubmissionDto) {
    return this.submissionService.create(input);
  }

  @Mutation(() => Submission)
  async updateSubmission(
    @Args("id") id: number,
    @Args("input") input: UpdateSubmissionDto,
  ) {
    return this.submissionService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteSubmission(@Args("id") id: number) {
    await this.submissionService.remove(id);
    return true;
  }
}
