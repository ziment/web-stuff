import { Module } from "@nestjs/common";
import { ProblemService } from "./problem.service";
import { ProblemController } from "./problem.controller";
import { ProblemResolver } from "./problem.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { ProblemApiController } from "./problem.api.controller";
import { S3Module } from "src/s3/s3.module";
import { S3Service } from "src/s3/s3.service";
import { SubmissionModule } from "../submission/submission.module";

@Module({
  imports: [PrismaModule, S3Module, SubmissionModule],
  controllers: [ProblemController, ProblemApiController],
  providers: [ProblemService, S3Service, ProblemResolver],
  exports: [ProblemService],
})
export class ProblemModule {}
