import { Module } from "@nestjs/common";
import { SubmissionService } from "./submission.service";
import { SubmissionController } from "./submission.controller";
import { SubmissionResolver } from "./submission.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { SubmissionApiController } from "./submission.api.controller";

@Module({
  imports: [PrismaModule],
  controllers: [SubmissionController, SubmissionApiController],
  providers: [SubmissionService, SubmissionResolver],
  exports: [SubmissionService],
})
export class SubmissionModule {}
