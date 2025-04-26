import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserResolver } from "./user.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { LeaderboardService } from "./leaderboard.service";
import { UserApiController } from "./user.api.controller";

@Module({
  imports: [PrismaModule],
  controllers: [UserController, UserApiController],
  providers: [UserService, LeaderboardService, UserResolver],
  exports: [UserService, LeaderboardService],
})
export class UserModule {}
