import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class LeaderboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getTopUsers(limit: number = 10) {
    const users = await this.prisma.user.findMany({
      select: {
        name: true,
        rating: true,
      },
      orderBy: {
        rating: "desc",
      },
      take: limit,
    });

    return users.map((user, index) => ({
      rank: index + 1,
      name: user.name || "Anonymous",
      rating: user.rating,
    }));
  }
}
