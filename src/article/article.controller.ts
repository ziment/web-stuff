import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Render,
  ParseIntPipe,
  Redirect,
  Query,
} from "@nestjs/common";
import { ArticleService } from "./article.service";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";
import { ApiExcludeController } from "@nestjs/swagger";

@ApiExcludeController()
@Controller("articles")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  @Render("articles/index")
  async index(@Query() paginationQuery: PaginationQueryDto) {
    const { articles, total } =
      await this.articleService.findAll(paginationQuery);
    let { page, limit } = paginationQuery;

    // todo: remove this
    page = page || 1;
    limit = limit || 10;

    const totalPages = Math.ceil(total / limit);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return {
      articles,
      pagination: {
        hasPreviousPage: page > 1,
        hasNextPage: page < totalPages,
        previousPage: page - 1,
        nextPage: page + 1,
        currentPage: page,
        pages,
        url: "/articles",
      },
    };
  }

  @Get("new")
  @Render("articles/new")
  new() {
    return { actionUrl: "/articles" };
  }

  @Get(":id/edit")
  @Render("articles/edit")
  @Redirect("/articles")
  async edit(@Param("id", ParseIntPipe) id: number) {
    const article = await this.articleService.findOne(id);
    return {
      article,
      actionUrl: `/articles/${id}/edit`,
      deleteUrl: `/articles/${id}/delete`,
    };
  }

  @Post()
  @Redirect("/articles")
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Post(":id/edit")
  @Redirect("/articles")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articleService.update(id, updateArticleDto);
  }

  @Get(":id/delete")
  @Redirect("/articles")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.articleService.remove(id);
  }
}
