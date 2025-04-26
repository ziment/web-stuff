import { Module } from "@nestjs/common";
import { ContestService } from "./contest.service";
import { ContestController } from "./contest.controller";
import { ContestResolver } from "./contest.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { ContestApiController } from "./contest.api.controller";
import { ProblemModule } from "src/problem/problem.module";

@Module({
  imports: [PrismaModule, ProblemModule],
  controllers: [ContestController, ContestApiController],
  providers: [ContestService, ContestResolver],
  exports: [ContestService],
})
export class ContestModule {}
