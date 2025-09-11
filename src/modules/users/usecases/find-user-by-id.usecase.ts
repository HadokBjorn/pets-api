import prismaUsersRepository from "../repositories/impl/prisma-users.repository";

class findUserByIdUseCase {
  async execute(id: string) {
    const user = await prismaUsersRepository.find({ id });

    delete user.password;

    return user;
  }
}
export default new findUserByIdUseCase();
