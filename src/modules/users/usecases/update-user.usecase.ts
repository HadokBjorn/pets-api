import { NotFoundException } from "@/shared/exceptions";
import { UpdateUserDto } from "../dtos/update-user.dto";
import prismaUsersRepository from "../repositories/impl/prisma-users.repository";

class updateUserUseCase {
  async execute(id: string, input: UpdateUserDto) {
    const user = await prismaUsersRepository.find({ id });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const updatedUser = await prismaUsersRepository.update(user.id, input);

    delete updatedUser.password;

    return updatedUser;
  }
}
export default new updateUserUseCase();
