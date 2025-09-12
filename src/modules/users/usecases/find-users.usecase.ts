import prismaUsersRepository from "../repositories/impl/prisma-users.repository";

class FindUsersUseCase {
  async execute() {
    return await prismaUsersRepository.findAll();
  }
}
export default new FindUsersUseCase();
