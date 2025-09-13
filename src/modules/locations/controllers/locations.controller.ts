import { FastifyReply, FastifyRequest } from "fastify";
import httpStatus from "http-status";
import findLocationsUseCase from "../usecases/find-locations.usecase";

class LocationsController {
  async findAll(req: FastifyRequest, reply: FastifyReply) {
    const results = await findLocationsUseCase.execute();

    reply.status(httpStatus.OK).send({ results });
  }
}
export default new LocationsController();
