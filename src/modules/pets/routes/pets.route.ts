import { FastifyTypedInstance } from "@/shared/types/fastify.type";
import { createPetBodySchema } from "../schemas/create-pet/create-pet.schema";
import petsController from "../controllers/pets.controller";
import { createPetResponseSchema } from "../schemas/create-pet/create-pet-response.schema";
import { findPetsResponseSchema } from "../schemas/find-pets/find-pets-response.schema";
import { findPetsParamsSchema } from "../schemas/find-pets/find-pets.schema";
import { findPetByIdResponseSchema } from "../schemas/find-pet-by-id/find-pet-by-id-response.schema";
import { findPetByIdParamSchema } from "../schemas/find-pet-by-id/find-pet-by-id.schema";

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

  app.get(
    "/pets",
    {
      schema: {
        tags: ["pets"],
        security: [{ bearerAuth: [] }],
        description: "Listagem dos Pets",
        response: { 200: findPetsResponseSchema },
        querystring: findPetsParamsSchema,
      },
    },
    petsController.findAll
  );

  app.get(
    "/pets/:id",
    {
      schema: {
        tags: ["pets"],
        security: [{ bearerAuth: [] }],
        description: "Buscar o Pet por ID",
        params: findPetByIdParamSchema,
        response: { 200: findPetByIdResponseSchema },
      },
    },
    petsController.findById
  );
};
