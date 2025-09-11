import prismaUsersRepository from "../repositories/impl/prisma-users.repository";

class findUserByIdUseCase {
  async execute(id: string) {
    return await prismaUsersRepository.find({ id });
  }
}
export default new findUserByIdUseCase();
