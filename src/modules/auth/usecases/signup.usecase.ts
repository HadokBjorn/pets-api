import { CreateUserDto } from "@/modules/users/dtos/create-user.dto";
import prismaUsersRepository from "@/modules/users/repositories/impl/prisma-users.repository";
import { ConflictException } from "@/shared/exceptions";
import bcrypt from "bcrypt";

class SignupUseCase {
  async execute(data: CreateUserDto) {
    const user = await prismaUsersRepository.find({ email: data.email });

    if (user) {
      throw new ConflictException("User already exists");
    }

    const hash = bcrypt.hashSync(data.password, 10);

    const createdUser = await prismaUsersRepository.create({
      ...data,
      password: hash,
    });

    delete createdUser.password;

    return createdUser;
  }
}
export default new SignupUseCase();
