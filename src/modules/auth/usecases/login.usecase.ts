import { LoginDto } from "../dtos/login.dto";
import prismaUsersRepository from "@/modules/users/repositories/impl/prisma-users.repository";
import { NotFoundException, UnauthorizedException } from "@/shared/exceptions";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class LoginUseCase {
  async execute({ email, password }: LoginDto) {
    const user = await prismaUsersRepository.find({ email });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const isCorrectPassword = bcrypt.compareSync(password, user.password);

    delete user.password;

    if (!isCorrectPassword)
      throw new UnauthorizedException("Invalid credentials.");

    const accessToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return { user, accessToken };
  }
}

export default new LoginUseCase();
