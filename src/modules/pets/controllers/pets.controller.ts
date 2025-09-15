import { FastifyReply, FastifyRequest } from "fastify";
import { CreatePetDto } from "../dtos/create-pet.dto";
import httpStatus from "http-status";
import createPetUseCase from "../usecases/create-pet.usecase";
import findPetsUseCase from "../usecases/find-pets.usecase";
import { FindPetsDto } from "../dtos/find-pets.dto";

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
}
export default new PetsController();
