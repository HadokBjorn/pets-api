import httpStatus from "http-status";
import findUsersUseCase from "../usecases/find-users.usecase";
import { FastifyReply, FastifyRequest } from "fastify";
import findUserByIdUseCase from "../usecases/find-user-by-id.usecase";
import { FindUserByIdDto } from "../dtos/find-user-by-id.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import updateUserUseCase from "../usecases/update-user.usecase";

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

  async updateSelf(
    req: FastifyRequest<{ Body: UpdateUserDto }>,
    reply: FastifyReply
  ) {
    const result = await updateUserUseCase.execute(req.auth_user_id, req.body);

    reply.status(httpStatus.OK).send({ result });
  }

  async updateById(
    req: FastifyRequest<{ Params: FindUserByIdDto; Body: UpdateUserDto }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;

    const result = await updateUserUseCase.execute(id, req.body);

    reply.status(httpStatus.OK).send({ result });
  }
}
export default new UsersController();
