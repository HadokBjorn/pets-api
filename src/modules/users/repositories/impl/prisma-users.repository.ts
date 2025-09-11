import prisma from "@/database/database.connections";
import { CreateUserDto } from "../../dtos/create-user.dto";
import { UserEntity } from "../../entities/user.entity";
import { UsersRepository } from "../users.repository";
import filteringUtil from "@/shared/utils/filtering/filtering.util";
import { TextSearchMode } from "@/shared/enums/filtering.enum";

class PrismaUsersRepository implements UsersRepository {
  create(data: CreateUserDto): Promise<UserEntity> {
    return prisma.user.create({ data });
  }

  find(filter: Partial<UserEntity>): Promise<UserEntity> {
    return prisma.user.findFirst({
      where: {
        AND: [
          filteringUtil.text("id", filter.id, TextSearchMode.Exact),
          filteringUtil.text("name", filter.name),
          filteringUtil.text("email", filter.email, TextSearchMode.Exact),
        ],
      },
    });
  }

  findAll(
    filter?: Partial<UserEntity>
  ): Promise<Omit<UserEntity, "password">[]> {
    return prisma.user.findMany({
      where: {
        AND: [
          filteringUtil.text("id", filter?.id, TextSearchMode.Exact),
          filteringUtil.text("name", filter?.name),
          filteringUtil.text("email", filter?.email, TextSearchMode.Exact),
        ],
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  update(id: string, data: Partial<UserEntity>): Promise<UserEntity> {
    return prisma.user.update({
      where: filteringUtil.text("id", id, TextSearchMode.Exact),
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: filteringUtil.text("id", id, TextSearchMode.Exact),
    });
  }
}

export default new PrismaUsersRepository();
