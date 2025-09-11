import { NotFoundException } from "@/shared/exceptions";
import { UpdateSelfUserDto } from "../dtos/update-self-user.dto";
import prismaUsersRepository from "../repositories/impl/prisma-users.repository";

class updateSelfUserUseCase {
  async execute(id: string, input: UpdateSelfUserDto) {
    const user = await prismaUsersRepository.find({ id });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const updatedUser = await prismaUsersRepository.update(user.id, input);

    delete updatedUser.password;

    return updatedUser;
  }
}
export default new updateSelfUserUseCase();
