import httpStatus from "http-status";
import findUsersUseCase from "../usecases/find-users.usecase";
import { FastifyReply, FastifyRequest } from "fastify";

class UsersController {
  async findAll(req: FastifyRequest, reply: FastifyReply) {
    const results = await findUsersUseCase.execute();

    reply.status(httpStatus.OK).send({ results });
  }
}
export default new UsersController();
