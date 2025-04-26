import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateSubmissionDto } from "./dto/create-submission.dto";
import { UpdateSubmissionDto } from "./dto/update-submission.dto";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";

@Injectable()
export class SubmissionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSubmissionDto: CreateSubmissionDto) {
    return this.prisma.submission.create({
      data: createSubmissionDto,
      include: {
        user: true,
        problem: true,
      },
    });
  }

  async findAll(paginationQuery: PaginationQueryDto) {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const [submissions, total] = await Promise.all([
      this.prisma.submission.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          user: true,
          problem: true,
        },
      }),
      this.prisma.submission.count(),
    ]);

    return { submissions, total };
  }

  async findOne(id: number) {
    return this.prisma.submission.findUnique({
      where: { id },
      include: {
        user: true,
        problem: true,
      },
    });
  }

  async update(id: number, updateSubmissionDto: UpdateSubmissionDto) {
    return this.prisma.submission.update({
      where: { id },
      data: updateSubmissionDto,
      include: {
        user: true,
        problem: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.submission.delete({
      where: { id },
    });
  }

  async findSubmissionsByUser(userId: number) {
    return this.prisma.submission.findMany({
      where: { userId },
      include: {
        problem: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findSubmissionsByProblem(problemId: number) {
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
}
