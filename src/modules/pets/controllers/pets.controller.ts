import { FastifyReply, FastifyRequest } from "fastify";
import { CreatePetDto } from "../dtos/create-pet.dto";
import httpStatus from "http-status";
import createPetUseCase from "../usecases/create-pet.usecase";
import findPetsUseCase from "../usecases/find-pets.usecase";
import { FindPetsDto } from "../dtos/find-pets.dto";
import { FindPetByIdDto } from "../dtos/find-pet-by-id.dto";
import findPetByIdUseCase from "../usecases/find-pet-by-id.usecase";
import deletePetUseCase from "../usecases/delete-pet.usecase";

class PetsController {
  async create(
    req: FastifyRequest<{ Body: CreatePetDto }>,
    reply: FastifyReply
  ) {
    const result = await createPetUseCase.execute(req.body);

    reply.status(httpStatus.CREATED).send({ result });
  }

  async findAll(
    req: FastifyRequest<{ Querystring: FindPetsDto }>,
    reply: FastifyReply
  ) {
    const results = await findPetsUseCase.execute(req.query);

    reply.status(httpStatus.OK).send({ results });
  }

  async findById(
    req: FastifyRequest<{ Params: FindPetByIdDto }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;

    const result = await findPetByIdUseCase.execute(id);

    reply.status(httpStatus.OK).send({ result });
  }

  async delete(
    req: FastifyRequest<{ Params: FindPetByIdDto }>,
    reply: FastifyReply
  ) {
    const { id } = req.params;

    await deletePetUseCase.execute(id);

    reply.status(httpStatus.NO_CONTENT);
  }
}
export default new PetsController();
