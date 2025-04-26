import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { LeaderboardService } from "../../user/leaderboard.service";
import { Response } from "express";
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class LayoutInterceptor implements NestInterceptor {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    // Skip for GraphQL
    if (GqlExecutionContext.create(context).getType() === "graphql") {
      return next.handle();
    }

    const response = context.switchToHttp().getResponse<Response>();

    if (!response.locals) {
      response.locals = {};
    }

    if (!("users" in response.locals)) {
      const leaderboardData = await this.leaderboardService.getTopUsers();
      response.locals.users = leaderboardData;
    }

    return next.handle();
  }
}
