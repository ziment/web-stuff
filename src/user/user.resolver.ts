import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "../prisma/generated/graphql";
import { PaginationQueryDto } from "../common/dto/pagination-query.dto";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: true })
  async user(@Args("id") id: number) {
    return this.userService.findOne(id);
  }

  @Query(() => [User])
  async users(@Args("paginationQuery") paginationQuery: PaginationQueryDto) {
    const result = await this.userService.findAll(paginationQuery);
    return result.users;
  }

  @Mutation(() => User)
  async createUser(@Args("input") input: CreateUserDto) {
    return this.userService.create(input);
  }

  @Mutation(() => User)
  async updateUser(
    @Args("id") id: number,
    @Args("input") input: UpdateUserDto,
  ) {
    return this.userService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args("id") id: number) {
    await this.userService.remove(id);
    return true;
  }
}
