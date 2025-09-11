import prismaUsersRepository from "../repositories/impl/prisma-users.repository";

class findUsersUseCase {
  async execute() {
    return await prismaUsersRepository.findAll();
  }
}
export default new findUsersUseCase();
