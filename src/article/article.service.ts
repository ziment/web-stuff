import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";
import { ArticleEventsService } from "./article.events.service";

@Injectable()
export class ArticleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly articleEvents: ArticleEventsService,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    const article = await this.prisma.article.create({
      data: createArticleDto,
    });
    this.articleEvents.emit({ type: "created", data: article });
    return article;
  }

  async findAll(paginationQuery: PaginationQueryDto) {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const [articles, total] = await Promise.all([
      this.prisma.article.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
      }),
      this.prisma.article.count(),
    ]);

    return { articles, total };
  }

  async findOne(id: number) {
    return this.prisma.article.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const article = await this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
    this.articleEvents.emit({ type: "updated", data: article });
    return article;
  }

  async remove(id: number) {
    const article = await this.prisma.article.delete({
      where: { id },
    });
    this.articleEvents.emit({ type: "deleted", data: article });
    return article;
  }
}
