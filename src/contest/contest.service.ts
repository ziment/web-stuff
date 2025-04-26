import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateContestDto } from "./dto/create-contest.dto";
import { UpdateContestDto } from "./dto/update-contest.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";

@Injectable()
export class ContestService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContestDto: CreateContestDto) {
    return this.prisma.contest.create({
      data: createContestDto,
    });
  }

  async findAll(paginationQuery: PaginationQueryDto) {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const [contests, total] = await Promise.all([
      this.prisma.contest.findMany({
        skip,
        take: limit,
        orderBy: {
          startDate: "desc",
        },
      }),
      this.prisma.contest.count(),
    ]);

    return { contests, total };
  }

  async findOne(id: number) {
    return this.prisma.contest.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateContestDto: UpdateContestDto) {
    return this.prisma.contest.update({
      where: { id },
      data: updateContestDto,
    });
  }

  async remove(id: number) {
    return this.prisma.contest.delete({
      where: { id },
    });
  }

  async findContestProblems(contestId: number) {
    return this.prisma.problem.findMany({
      where: { contestId },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findContestSubmissions(contestId: number) {
    return this.prisma.submission.findMany({
      where: {
        problem: {
          contestId,
        },
      },
      include: {
        user: true,
        problem: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async addProblem(contestId: number, problemId: number) {
    return this.prisma.problem.update({
      where: { id: problemId },
      data: {
        contestId,
      },
    });
  }

  async removeProblem(contestId: number, problemId: number) {
    return this.prisma.problem.update({
      where: { id: problemId },
      data: {
        contestId: null,
      },
    });
  }
}
