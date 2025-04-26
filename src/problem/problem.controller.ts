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
  UsePipes,
  ValidationPipe,
  UseInterceptors,
  UploadedFile,
  NotFoundException,
  Redirect,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ProblemService } from "./problem.service";
import { CreateProblemDto } from "./dto/create-problem.dto";
import { UpdateProblemDto } from "./dto/update-problem.dto";
import { ApiExcludeController } from "@nestjs/swagger";
import { S3Service } from "../s3/s3.service";
import { SubmissionService } from "../submission/submission.service";
import { Request } from "express";

@ApiExcludeController()
@Controller("problems")
@UsePipes(new ValidationPipe({ transform: true }))
export class ProblemController {
  constructor(
    private readonly problemService: ProblemService,
    private readonly s3Service: S3Service,
    private readonly submissionService: SubmissionService,
  ) {}

  @Post()
  create(@Body() createProblemDto: CreateProblemDto) {
    return this.problemService.create(createProblemDto);
  }

  @Get(":id")
  @Render("contests/problem")
  async show(@Param("id", ParseIntPipe) id: number) {
    const problem = await this.problemService.findOne(id);
    return { problem };
  }

  @Get(":id/submissions")
  @Render("problems/submissions")
  async submissions(@Param("id", ParseIntPipe) id: number) {
    const problem = await this.problemService.findOne(id);
    if (!problem) {
      throw new NotFoundException(`Problem with ID ${id} not found`);
    }
    const submissions =
      await this.submissionService.findSubmissionsByProblem(id);
    return { problem, submissions };
  }

  @Get(":id/submit")
  @Render("contests/submit")
  async showSubmitForm(@Param("id", ParseIntPipe) id: number) {
    const problem = await this.problemService.findOne(id);
    if (!problem) {
      throw new NotFoundException(`Problem with ID ${id} not found`);
    }
    return { problem };
  }

  @Post(":id/submit")
  @Redirect()
  @UseInterceptors(FileInterceptor("solution"))
  async submitSolution(
    @Param("id", ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const problem = await this.problemService.findOne(id);
    if (!problem) {
      throw new NotFoundException(`Problem with ID ${id} not found`);
    }

    const userId = 1; // todo: xd

    const fileKey = `submissions/${userId}/${problem.id}/${Date.now()}-${file.originalname}`;
    await this.s3Service.uploadFile(file, fileKey);

    const submission = await this.submissionService.create({
      userId,
      problemId: id,
      fileUrl: fileKey,
    });

    return { submission, url: `/contests/${problem.contestId}` };
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProblemDto: UpdateProblemDto) {
    return this.problemService.update(+id, updateProblemDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.problemService.remove(+id);
  }
}
