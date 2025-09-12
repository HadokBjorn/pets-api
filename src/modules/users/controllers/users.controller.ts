import httpStatus from "http-status";
import FindUsersUseCase from "../usecases/find-users.usecase";
import { FastifyReply, FastifyRequest } from "fastify";
import FindUserByIdUseCase from "../usecases/find-user-by-id.usecase";
import { FindUserByIdDto } from "../dtos/find-user-by-id.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import UpdateUserUseCase from "../usecases/update-user.usecase";
import deleteUserUseCase from "../usecases/delete-user.usecase";

class UsersController {
  async findAll(req: FastifyRequest, reply: FastifyReply) {
    const results = await FindUsersUseCase.execute();

    reply.status(httpStatus.OK).send({ results });
  }

  async findById(
    req: FastifyRequest<{ Params: FindUserByIdDto }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;

    const result = await FindUserByIdUseCase.execute(id);

    reply.status(httpStatus.OK).send({ result });
  }

  async updateSelf(
    req: FastifyRequest<{ Body: UpdateUserDto }>,
    reply: FastifyReply
  ) {
    const result = await UpdateUserUseCase.execute(req.auth_user_id, req.body);

    reply.status(httpStatus.OK).send({ result });
  }

  async updateById(
    req: FastifyRequest<{ Params: FindUserByIdDto; Body: UpdateUserDto }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;

    const result = await UpdateUserUseCase.execute(id, req.body);

    reply.status(httpStatus.OK).send({ result });
  }

  async delete(
    req: FastifyRequest<{ Params: FindUserByIdDto }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;

    await deleteUserUseCase.execute(id);

    reply.status(httpStatus.NO_CONTENT);
  }
}
export default new UsersController();
