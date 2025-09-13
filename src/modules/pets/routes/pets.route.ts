import { FastifyTypedInstance } from "@/shared/types/fastify.type";
import { createPetBodySchema } from "../schemas/create-pet/create-pet.schema";
import petsController from "../controllers/pets.controller";

export const petsRoutes = async (app: FastifyTypedInstance) => {
  app.post(
    "/pets",
    {
      schema: {
        tags: ["pets"],
        security: [{ bearerAuth: [] }],
        description: "Cadastro de um Pet",
        body: createPetBodySchema,
        // response: { 201: createUserResponseSchema },
      },
    },
    petsController.create
  );
};
