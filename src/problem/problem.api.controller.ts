import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { ProblemService } from "./problem.service";
import { CreateProblemDto } from "./dto/create-problem.dto";
import { UpdateProblemDto } from "./dto/update-problem.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from "@nestjs/swagger";
import { CreateSubmissionDto } from "../submission/dto/create-submission.dto";
import { CreateContestDto } from "../contest/dto/create-contest.dto";

@ApiTags("Problems")
@Controller("api/problems")
@UsePipes(new ValidationPipe({ transform: true }))
export class ProblemApiController {
  constructor(private readonly problemService: ProblemService) {}

  @Post()
  @ApiOperation({ summary: "Create a new problem" })
  @ApiResponse({
    status: 201,
    description: "Problem created successfully",
    type: CreateProblemDto,
  })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  async create(@Body() createProblemDto: CreateProblemDto) {
    return await this.problemService.create(createProblemDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all problems with pagination" })
  @ApiQuery({
    name: "page",
    required: false,
    type: Number,
    description: "Page number",
  })
  @ApiQuery({
    name: "limit",
    required: false,
    type: Number,
    description: "Items per page",
  })
  @ApiResponse({
    status: 200,
    description: "Returns paginated problems",
    schema: {
      example: {
        data: [
          {
            id: 1,
            title: "A + B Problem",
            description: "Calculate the sum of two numbers",
            createdAt: "2024-04-26T12:00:00.000Z",
            updatedAt: "2024-04-26T12:00:00.000Z",
          },
        ],
        meta: {
          total: 1,
          page: 1,
          limit: 10,
        },
      },
    },
  })
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    const { problems, total } =
      await this.problemService.findAll(paginationQuery);
    return {
      data: problems,
      meta: {
        total,
        page: paginationQuery.page,
        limit: paginationQuery.limit,
      },
    };
  }

  @Get(":id")
  @ApiOperation({ summary: "Get problem by ID" })
  @ApiParam({ name: "id", description: "Problem ID" })
  @ApiResponse({
    status: 200,
    description: "Returns the problem",
    type: CreateProblemDto,
  })
  @ApiResponse({ status: 404, description: "Problem not found" })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    const problem = await this.problemService.findOne(id);
    if (!problem) {
      throw new HttpException("Problem not found", HttpStatus.NOT_FOUND);
    }
    return problem;
  }

  @Get(":id/submissions")
  @ApiOperation({ summary: "Get all submissions for a problem" })
  @ApiParam({ name: "id", description: "Problem ID" })
  @ApiResponse({
    status: 200,
    description: "Returns problem submissions",
    type: [CreateSubmissionDto],
  })
  @ApiResponse({ status: 404, description: "Problem not found" })
  async findProblemSubmissions(@Param("id", ParseIntPipe) id: number) {
    return await this.problemService.findProblemSubmissions(id);
  }

  @Get(":id/contest")
  @ApiOperation({ summary: "Get contest associated with a problem" })
  @ApiParam({ name: "id", description: "Problem ID" })
  @ApiResponse({
    status: 200,
    description: "Returns the contest",
    type: CreateContestDto,
  })
  @ApiResponse({ status: 404, description: "Problem not found" })
  async findProblemContest(@Param("id", ParseIntPipe) id: number) {
    return await this.problemService.findProblemContest(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update problem by ID" })
  @ApiParam({ name: "id", description: "Problem ID" })
  @ApiResponse({
    status: 200,
    description: "Problem updated successfully",
    type: UpdateProblemDto,
  })
  @ApiResponse({ status: 404, description: "Problem not found" })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateProblemDto: UpdateProblemDto,
  ) {
    const problem = await this.problemService.update(id, updateProblemDto);
    if (!problem) {
      throw new HttpException("Problem not found", HttpStatus.NOT_FOUND);
    }
    return problem;
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete problem by ID" })
  @ApiParam({ name: "id", description: "Problem ID" })
  @ApiResponse({
    status: 200,
    description: "Problem deleted successfully",
    schema: {
      example: {
        message: "Problem deleted successfully",
      },
    },
  })
  @ApiResponse({ status: 404, description: "Problem not found" })
  async remove(@Param("id", ParseIntPipe) id: number) {
    const result = await this.problemService.remove(id);
    if (!result) {
      throw new HttpException("Problem not found", HttpStatus.NOT_FOUND);
    }
    return { message: "Problem deleted successfully" };
  }
}
