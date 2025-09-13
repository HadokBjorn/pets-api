import { FastifyReply, FastifyRequest } from "fastify";
import { CreatePetDto } from "../dtos/create-pet.dto";
import createPetUsecase from "../usecases/create-pet.usecase";
import httpStatus from "http-status";

class PetsController {
  async create(
    req: FastifyRequest<{ Body: CreatePetDto }>,
    reply: FastifyReply
  ) {
    const result = await createPetUsecase.execute(req.body);

    reply.status(httpStatus.CREATED).send({ result });
  }
}
export default new PetsController();
