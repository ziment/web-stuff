import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LayoutInterceptor } from "./interceptors/layout.interceptor";
import { ElapsedTimeInterceptor } from "./interceptors/elapsed-time.interceptor";
import { UserModule } from "../user/user.module";

@Module({
  imports: [UserModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LayoutInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ElapsedTimeInterceptor,
    },
  ],
})
export class CommonModule {}
