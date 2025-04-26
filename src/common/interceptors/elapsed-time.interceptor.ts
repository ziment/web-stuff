import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { Response } from "express";

@Injectable()
export class ElapsedTimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();

    const isGraphQL = context.getType<"graphql" | "http">() === "graphql";
    const isHttp = context.getType<"http" | "graphql">() === "http";

    if (isGraphQL) {
      return next.handle().pipe(
        map((data: object) => {
          const elapsedTime = Date.now() - now;
          console.log(`GraphQL request took ${elapsedTime}ms`);

          return {
            ...data,
            elapsedTime,
          };
        }),
      );
    }

    if (isHttp) {
      const response = context.switchToHttp().getResponse<Response>();

      return next.handle().pipe(
        tap(() => {
          const elapsedTime = Date.now() - now;
          console.log(`HTTP request took ${elapsedTime}ms`);

          const contentType = response.getHeader("Content-Type");
          const isJson =
            contentType && contentType.toString().includes("application/json");

          if (isJson) {
            response.setHeader("X-Elapsed-Time", `${elapsedTime}ms`);
          } else {
            if (!response.locals) {
              response.locals = {};
            }

            response.locals.serverElapsedTime = elapsedTime;
          }
        }),
      );
    }

    return next.handle();
  }
}
