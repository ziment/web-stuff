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
import { SubmissionService } from "./submission.service";
import { CreateSubmissionDto } from "./dto/create-submission.dto";
import { UpdateSubmissionDto } from "./dto/update-submission.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from "@nestjs/swagger";

@ApiTags("Submissions")
@Controller("api/submissions")
@UsePipes(new ValidationPipe({ transform: true }))
export class SubmissionApiController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Post()
  @ApiOperation({ summary: "Create a new submission" })
  @ApiResponse({
    status: 201,
    description: "Submission created successfully",
    type: CreateSubmissionDto,
  })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  async create(@Body() createSubmissionDto: CreateSubmissionDto) {
    return await this.submissionService.create(createSubmissionDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all submissions with pagination" })
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
    description: "Returns paginated submissions",
    schema: {
      example: {
        data: [
          {
            id: 1,
            code: "print(input() + input())",
            createdAt: "2024-04-26T12:30:00.000Z",
            userId: 1,
            problemId: 1,
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
    const { submissions, total } =
      await this.submissionService.findAll(paginationQuery);
    return {
      data: submissions,
      meta: {
        total,
        page: paginationQuery.page ?? 1,
        limit: paginationQuery.limit ?? 10,
      },
    };
  }

  @Get(":id")
  @ApiOperation({ summary: "Get submission by ID" })
  @ApiParam({ name: "id", description: "Submission ID" })
  @ApiResponse({
    status: 200,
    description: "Returns the submission",
    type: CreateSubmissionDto,
  })
  @ApiResponse({ status: 404, description: "Submission not found" })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    const submission = await this.submissionService.findOne(id);
    if (!submission) {
      throw new HttpException("Submission not found", HttpStatus.NOT_FOUND);
    }
    return submission;
  }

  @Get(":id/problems")
  @ApiOperation({ summary: "Get all submissions for a problem" })
  @ApiParam({ name: "id", description: "Problem ID" })
  @ApiResponse({
    status: 200,
    description: "Returns problem submissions",
    type: [CreateSubmissionDto],
  })
  @ApiResponse({ status: 404, description: "Problem not found" })
  async findSubmissionProblems(@Param("id", ParseIntPipe) id: number) {
    return await this.submissionService.findSubmissionsByProblem(id);
  }

  @Get(":id/user")
  @ApiOperation({ summary: "Get all submissions by a user" })
  @ApiParam({ name: "id", description: "User ID" })
  @ApiResponse({
    status: 200,
    description: "Returns user submissions",
    type: [CreateSubmissionDto],
  })
  @ApiResponse({ status: 404, description: "User not found" })
  async findSubmissionUser(@Param("id", ParseIntPipe) id: number) {
    return await this.submissionService.findSubmissionsByUser(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update submission by ID" })
  @ApiParam({ name: "id", description: "Submission ID" })
  @ApiResponse({
    status: 200,
    description: "Submission updated successfully",
    type: UpdateSubmissionDto,
  })
  @ApiResponse({ status: 404, description: "Submission not found" })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateSubmissionDto: UpdateSubmissionDto,
  ) {
    const submission = await this.submissionService.update(
      id,
      updateSubmissionDto,
    );
    if (!submission) {
      throw new HttpException("Submission not found", HttpStatus.NOT_FOUND);
    }
    return submission;
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete submission by ID" })
  @ApiParam({ name: "id", description: "Submission ID" })
  @ApiResponse({
    status: 200,
    description: "Submission deleted successfully",
    schema: {
      example: {
        message: "Submission deleted successfully",
      },
    },
  })
  @ApiResponse({ status: 404, description: "Submission not found" })
  async remove(@Param("id", ParseIntPipe) id: number) {
    const result = await this.submissionService.remove(id);
    if (!result) {
      throw new HttpException("Submission not found", HttpStatus.NOT_FOUND);
    }
    return { message: "Submission deleted successfully" };
  }
}
