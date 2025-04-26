import { Injectable } from "@nestjs/common";
import { Subject } from "rxjs";

export interface ArticleEvent {
  type: "created" | "updated" | "deleted";
  data: any;
}

@Injectable()
export class ArticleEventsService {
  private readonly events$ = new Subject<ArticleEvent>();

  emit(event: ArticleEvent) {
    this.events$.next(event);
  }

  getEvents() {
    return this.events$.asObservable();
  }
}
