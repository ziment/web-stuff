import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ArticleService } from "./article.service";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";
import { Article } from "../prisma/generated/graphql";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";

@Resolver(() => Article)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Query(() => Article, { nullable: true })
  async article(@Args("id") id: number) {
    return this.articleService.findOne(id);
  }

  @Query(() => [Article])
  async articles(@Args("paginationQuery") paginationQuery: PaginationQueryDto) {
    const result = await this.articleService.findAll(paginationQuery);
    return result.articles;
  }

  @Mutation(() => Article)
  async createArticle(@Args("input") input: CreateArticleDto) {
    return this.articleService.create(input);
  }

  @Mutation(() => Article)
  async updateArticle(
    @Args("id") id: number,
    @Args("input") input: UpdateArticleDto,
  ) {
    return this.articleService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteArticle(@Args("id") id: number) {
    await this.articleService.remove(id);
    return true;
  }
}
