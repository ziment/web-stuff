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
import { ContestService } from "./contest.service";
import { CreateContestDto } from "./dto/create-contest.dto";
import { UpdateContestDto } from "./dto/update-contest.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from "@nestjs/swagger";
import { CreateProblemDto } from "../problem/dto/create-problem.dto";
import { CreateSubmissionDto } from "../submission/dto/create-submission.dto";

@ApiTags("Contests")
@Controller("api/contests")
@UsePipes(new ValidationPipe({ transform: true }))
export class ContestApiController {
  constructor(private readonly contestService: ContestService) {}

  @Post()
  @ApiOperation({ summary: "Create a new contest" })
  @ApiResponse({
    status: 201,
    description: "Contest created successfully",
    type: CreateContestDto,
  })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  async create(@Body() createContestDto: CreateContestDto) {
    return await this.contestService.create(createContestDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all contests with pagination" })
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
    description: "Returns paginated contests",
    schema: {
      example: {
        data: [
          {
            id: 1,
            name: "April Contest 2024",
            startDate: "2024-04-26T12:00:00.000Z",
            endDate: "2024-04-27T12:00:00.000Z",
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
    const { contests, total } =
      await this.contestService.findAll(paginationQuery);
    return {
      data: contests,
      meta: {
        total,
        page: paginationQuery.page,
        limit: paginationQuery.limit,
      },
    };
  }

  @Get(":id")
  @ApiOperation({ summary: "Get contest by ID" })
  @ApiParam({ name: "id", description: "Contest ID" })
  @ApiResponse({
    status: 200,
    description: "Returns the contest",
    type: CreateContestDto,
  })
  @ApiResponse({ status: 404, description: "Contest not found" })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    const contest = await this.contestService.findOne(id);
    if (!contest) {
      throw new HttpException("Contest not found", HttpStatus.NOT_FOUND);
    }
    return contest;
  }

  @Get(":id/problems")
  @ApiOperation({ summary: "Get all problems in a contest" })
  @ApiParam({ name: "id", description: "Contest ID" })
  @ApiResponse({
    status: 200,
    description: "Returns contest problems",
    type: [CreateProblemDto],
  })
  @ApiResponse({ status: 404, description: "Contest not found" })
  async findContestProblems(@Param("id", ParseIntPipe) id: number) {
    return await this.contestService.findContestProblems(id);
  }

  @Get(":id/submissions")
  @ApiOperation({ summary: "Get all submissions in a contest" })
  @ApiParam({ name: "id", description: "Contest ID" })
  @ApiResponse({
    status: 200,
    description: "Returns contest submissions",
    type: [CreateSubmissionDto],
  })
  @ApiResponse({ status: 404, description: "Contest not found" })
  async findContestSubmissions(@Param("id", ParseIntPipe) id: number) {
    return await this.contestService.findContestSubmissions(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update contest by ID" })
  @ApiParam({ name: "id", description: "Contest ID" })
  @ApiResponse({
    status: 200,
    description: "Contest updated successfully",
    type: UpdateContestDto,
  })
  @ApiResponse({ status: 404, description: "Contest not found" })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateContestDto: UpdateContestDto,
  ) {
    const contest = await this.contestService.update(id, updateContestDto);
    if (!contest) {
      throw new HttpException("Contest not found", HttpStatus.NOT_FOUND);
    }
    return contest;
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete contest by ID" })
  @ApiParam({ name: "id", description: "Contest ID" })
  @ApiResponse({
    status: 200,
    description: "Contest deleted successfully",
    schema: {
      example: {
        message: "Contest deleted successfully",
      },
    },
  })
  @ApiResponse({ status: 404, description: "Contest not found" })
  async remove(@Param("id", ParseIntPipe) id: number) {
    const result = await this.contestService.remove(id);
    if (!result) {
      throw new HttpException("Contest not found", HttpStatus.NOT_FOUND);
    }
    return { message: "Contest deleted successfully" };
  }
}
