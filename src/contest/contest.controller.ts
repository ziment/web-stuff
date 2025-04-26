import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  ParseIntPipe,
  Query,
  DefaultValuePipe,
  Redirect,
} from "@nestjs/common";
import { ContestService } from "./contest.service";
import { CreateContestDto } from "./dto/create-contest.dto";
import { UpdateContestDto } from "./dto/update-contest.dto";
import { ApiExcludeController } from "@nestjs/swagger";
import { CreateProblemDto } from "src/problem/dto/create-problem.dto";
import { ProblemService } from "src/problem/problem.service";

@ApiExcludeController()
@Controller("contests")
export class ContestController {
  constructor(
    private readonly contestService: ContestService,
    private readonly problemService: ProblemService,
  ) {}

  @Post()
  create(@Body() createContestDto: CreateContestDto) {
    return this.contestService.create(createContestDto);
  }

  @Post(":id/new_problem")
  @Redirect()
  async addProblem(
    @Param("id", ParseIntPipe) id: number,
    @Body() createProblemDto: CreateProblemDto,
  ) {
    await this.problemService.create(createProblemDto);
    return { url: `/contests/${id}` };
  }

  @Get(":id/new_problem")
  @Render("contests/new")
  newProblem(@Param("id", ParseIntPipe) id: number) {
    return { actionUrl: `/contests/${id}/new_problem`, contestId: id };
  }

  @Get()
  @Render("contests/index")
  async index(
    @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    const limit = 20;
    const { contests, total } = await this.contestService.findAll({
      page,
      limit,
    });

    const totalPages = Math.ceil(total / limit);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return {
      contests,
      pagination: {
        hasPreviousPage: page > 1,
        hasNextPage: page < totalPages,
        previousPage: page - 1,
        nextPage: page + 1,
        currentPage: page,
        pages,
        url: "/contests",
      },
    };
  }

  @Get(":id")
  @Render("contests/problems")
  async show(@Param("id", ParseIntPipe) id: number) {
    const contest = await this.contestService.findOne(id);
    const problems = await this.contestService.findContestProblems(id);
    return { contest, problems };
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateContestDto: UpdateContestDto) {
    return this.contestService.update(+id, updateContestDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.contestService.remove(+id);
  }
}
