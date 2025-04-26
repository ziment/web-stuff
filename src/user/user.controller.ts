import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiExcludeController } from "@nestjs/swagger";
import { LeaderboardService } from "./leaderboard.service";

@ApiExcludeController()
@Controller("users")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly leaderboardService: LeaderboardService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get("leaderboard")
  @Render("users/leaderboard")
  async leaderboard() {
    const users = await this.leaderboardService.getTopUsers();
    return { users };
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
