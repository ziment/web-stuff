import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProblemDto } from "./dto/create-problem.dto";
import { UpdateProblemDto } from "./dto/update-problem.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";

@Injectable()
export class ProblemService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProblemDto: CreateProblemDto) {
    return this.prisma.problem.create({
      data: createProblemDto,
    });
  }

  async findAll(paginationQuery: PaginationQueryDto) {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const [problems, total] = await Promise.all([
      this.prisma.problem.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
      }),
      this.prisma.problem.count(),
    ]);

    return { problems, total };
  }

  async findOne(id: number) {
    return this.prisma.problem.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProblemDto: UpdateProblemDto) {
    return this.prisma.problem.update({
      where: { id },
      data: updateProblemDto,
    });
  }

  async remove(id: number) {
    return this.prisma.problem.delete({
      where: { id },
    });
  }

  async findProblemSubmissions(problemId: number) {
    return this.prisma.submission.findMany({
      where: { problemId },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findProblemContest(problemId: number) {
    return this.prisma.contest.findFirst({
      where: {
        problems: {
          some: {
            id: problemId,
          },
        },
      },
    });
  }
}
