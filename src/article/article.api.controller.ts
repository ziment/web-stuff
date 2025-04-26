import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { ArticleService } from "./article.service";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from "@nestjs/swagger";

@ApiTags("Articles")
@Controller("api/articles")
@UsePipes(new ValidationPipe({ transform: true }))
export class ArticleApiController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @ApiOperation({ summary: "Create a new article" })
  @ApiResponse({ status: 201, description: "Article created successfully" })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  async create(@Body() createArticleDto: CreateArticleDto) {
    return await this.articleService.create(createArticleDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all articles with pagination" })
  @ApiQuery({
    name: "page",
    required: false,
    type: Number,
    description: "Page number",
  })
  @ApiQuery({
    name: "limit",
    required: false,
    type: Number,
    description: "Items per page",
  })
  @ApiResponse({ status: 200, description: "Returns paginated articles" })
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    const { articles, total } =
      await this.articleService.findAll(paginationQuery);
    return {
      data: articles,
      meta: {
        total,
        page: paginationQuery.page,
        limit: paginationQuery.limit,
      },
    };
  }

  @Get(":id")
  @ApiOperation({ summary: "Get article by ID" })
  @ApiParam({ name: "id", description: "Article ID" })
  @ApiResponse({ status: 200, description: "Returns the article" })
  @ApiResponse({ status: 404, description: "Article not found" })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    const article = await this.articleService.findOne(id);
    if (!article) {
      throw new HttpException("Article not found", HttpStatus.NOT_FOUND);
    }
    return article;
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update article by ID" })
  @ApiParam({ name: "id", description: "Article ID" })
  @ApiResponse({ status: 200, description: "Article updated successfully" })
  @ApiResponse({ status: 404, description: "Article not found" })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    const article = await this.articleService.update(id, updateArticleDto);
    if (!article) {
      throw new HttpException("Article not found", HttpStatus.NOT_FOUND);
    }
    return article;
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete article by ID" })
  @ApiParam({ name: "id", description: "Article ID" })
  @ApiResponse({ status: 200, description: "Article deleted successfully" })
  @ApiResponse({ status: 404, description: "Article not found" })
  async remove(@Param("id", ParseIntPipe) id: number) {
    const result = await this.articleService.remove(id);
    if (!result) {
      throw new HttpException("Article not found", HttpStatus.NOT_FOUND);
    }
    return { message: "Article deleted successfully" };
  }
}
