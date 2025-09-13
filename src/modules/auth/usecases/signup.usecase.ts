import { CreateUserDto } from "@/modules/users/dtos/create-user.dto";
import prismaUsersRepository from "@/modules/users/repositories/impl/prisma-users.repository";
import { ConflictException } from "@/shared/exceptions";
import generateAuthTokenUtil from "../utils/generate-auth-token.util";
import generateHashPassword from "../utils/generate-hash-password";

class SignupUseCase {
  async execute(data: CreateUserDto) {
    const user = await prismaUsersRepository.find({ email: data.email });

    if (user) {
      throw new ConflictException("User already exists");
    }

    const hash = generateHashPassword.execute(data.password);

    const createdUser = await prismaUsersRepository.create({
      ...data,
      password: hash,
    });

    delete createdUser.password;

    const accessToken = generateAuthTokenUtil.execute(createdUser.id);

    return { ...createdUser, accessToken };
  }
}
export default new SignupUseCase();
