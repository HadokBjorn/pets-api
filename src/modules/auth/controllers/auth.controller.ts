import { LoginDto } from "../dtos/login.dto";
import httpStatus from "http-status";
import signupUseCase from "../usecases/signup.usecase";
import loginUseCase from "../usecases/login.usecase";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserDto } from "@/modules/users/dtos/create-user.dto";

class AuthController {
  async signup(
    req: FastifyRequest<{ Body: CreateUserDto }>,
    reply: FastifyReply
  ) {
    const data: CreateUserDto = req.body;
    const result = await signupUseCase.execute(data);

    return reply.status(httpStatus.CREATED).send({ result });
  }

  async login(req: FastifyRequest<{ Body: LoginDto }>, reply: FastifyReply) {
    const data = req.body;
    const result = await loginUseCase.execute(data);

    return reply.status(httpStatus.OK).send({ result });
  }
}
export default new AuthController();
