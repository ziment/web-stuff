import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import * as hbs from "hbs";
import * as layouts from "handlebars-layouts";
import * as dateFormat from "handlebars-dateformat";
import * as helpers from "handlebars-helpers";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { isBefore, isAfter } from "date-fns";
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get("port", 3000);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Big Problem API")
    .setDescription("The Big Problem API description")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api/docs", app, document);

  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  hbs.registerPartials(join(__dirname, "..", "views", "partials"));
  hbs.registerPartials(join(__dirname, "..", "views", "layouts"));

  // todo: handkebars is just cringe, deal with these helpers
  const handlebars = hbs.handlebars;
  handlebars.registerHelper(layouts(handlebars));
  handlebars.registerHelper("formatDate", dateFormat);
  handlebars.registerHelper(helpers(handlebars));

  handlebars.registerHelper(
    "isBefore",
    (date1: string | Date, date2: string | Date): boolean => {
      return isBefore(new Date(date1), new Date(date2));
    },
  );

  handlebars.registerHelper(
    "isAfter",
    (date1: string | Date, date2: string | Date): boolean => {
      return isAfter(new Date(date1), new Date(date2));
    },
  );

  handlebars.registerHelper(
    "contentFor",
    function (
      this: { _blocks?: Record<string, string[]> },
      name: string,
      options: { fn: (context: unknown) => string },
    ) {
      const blocks = this._blocks || (this._blocks = {});
      const block = blocks[name] || (blocks[name] = []);
      block.push(options.fn(this));
    },
  );

  handlebars.registerHelper(
    "block",
    function (
      this: { _blocks?: Record<string, string[]> },
      name: string,
      options: { fn: (context: unknown) => string },
    ) {
      const blocks = this._blocks || {};
      const block = blocks[name] || [];
      return block.length > 0 ? block.join("\n") : options.fn(this);
    },
  );

  app.set("view options", { layout: "layouts/main" });
  app.setViewEngine("hbs");

  await app.listen(port);
  console.log(`Running on port ${port}`);
}

void bootstrap();
