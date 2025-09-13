import { FastifyTypedInstance } from "@/shared/types/fastify.type";
import { createPetBodySchema } from "../schemas/create-pet/create-pet.schema";
import petsController from "../controllers/pets.controller";
import { createPetResponseSchema } from "../schemas/create-pet/create-pet-response.schema";

export const petsRoutes = async (app: FastifyTypedInstance) => {
  app.post(
    "/pets",
    {
      schema: {
        tags: ["pets"],
        security: [{ bearerAuth: [] }],
        description: "Cadastro de um Pet",
        body: createPetBodySchema,
        response: { 201: createPetResponseSchema },
      },
    },
    petsController.create
  );
};
