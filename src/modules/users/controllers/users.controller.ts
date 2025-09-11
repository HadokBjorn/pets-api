import httpStatus from "http-status";
import findUsersUseCase from "../usecases/find-users.usecase";
import { FastifyReply, FastifyRequest } from "fastify";
import findUserByIdUseCase from "../usecases/find-user-by-id.usecase";
import { FindUserByIdDto } from "../dtos/find-user-by-id.dto";

class UsersController {
  async findAll(req: FastifyRequest, reply: FastifyReply) {
    const results = await findUsersUseCase.execute();

    reply.status(httpStatus.OK).send({ results });
  }

  async findById(
    req: FastifyRequest<{ Params: FindUserByIdDto }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;

    const result = await findUserByIdUseCase.execute(id);

    reply.status(httpStatus.OK).send({ result });
  }
}
export default new UsersController();
