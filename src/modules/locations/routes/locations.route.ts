import { FastifyTypedInstance } from "@/shared/types/fastify.type";
import locationsController from "../controllers/locations.controller";
import { findLocationsResponseSchema } from "../schemas/find-locations/find-locations-response.schema";

export const locationsRoutes = async (app: FastifyTypedInstance) => {
  app.get(
    "/locations",
    {
      schema: {
        tags: ["locations"],
        security: [{ bearerAuth: [] }],
        description: "Cadastro de um Pet",
        response: { 200: findLocationsResponseSchema },
      },
    },
    locationsController.findAll
  );
};
