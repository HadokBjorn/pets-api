import { NotFoundException } from "@/shared/exceptions";
import prismaUsersRepository from "../repositories/impl/prisma-users.repository";

class FindUserByIdUseCase {
  async execute(id: string) {
    const user = await prismaUsersRepository.find({ id });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    delete user.password;

    return user;
  }
}
export default new FindUserByIdUseCase();
