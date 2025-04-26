import { Module } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { ArticleController } from "./article.controller";
import { ArticleResolver } from "./article.resolver";
import { ArticleEventsService } from "./article.events.service";
import { ArticleEventsController } from "./article.events.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { ArticleApiController } from "./article.api.controller";

@Module({
  imports: [PrismaModule],
  controllers: [
    ArticleController,
    ArticleEventsController,
    ArticleApiController,
  ],
  providers: [ArticleService, ArticleEventsService, ArticleResolver],
  exports: [ArticleService],
})
export class ArticleModule {}
