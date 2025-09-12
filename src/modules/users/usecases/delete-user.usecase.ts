import { NotFoundException } from "@/shared/exceptions";
import { UpdateUserDto } from "../dtos/update-user.dto";
import prismaUsersRepository from "../repositories/impl/prisma-users.repository";

class DeleteUserUseCase {
  async execute(id: string) {
    const user = await prismaUsersRepository.find({ id });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    await prismaUsersRepository.delete(id);
  }
}
export default new DeleteUserUseCase();
