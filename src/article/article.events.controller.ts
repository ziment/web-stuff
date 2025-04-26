import { Controller, Sse } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ArticleEventsService } from "./article.events.service";
import { ApiExcludeController } from "@nestjs/swagger";

@ApiExcludeController()
@Controller("articles/events")
export class ArticleEventsController {
  constructor(private readonly articleEvents: ArticleEventsService) {}

  @Sse("stream")
  stream(): Observable<{ data: string }> {
    return this.articleEvents.getEvents().pipe(
      map((event) => ({
        data: JSON.stringify(event),
      })),
    );
  }
}
