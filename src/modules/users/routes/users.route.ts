import { FastifyTypedInstance } from "@/shared/types/fastify.type";
import usersController from "../controllers/users.controller";
import { findUserByIdParamSchema } from "../schemas/find-user-by-id.schema";

export const usersRoutes = async (app: FastifyTypedInstance) => {
  app.get(
    "/users",
    {
      schema: {
        tags: ["users"],
        security: [{ bearerAuth: [] }],
        description: "Listagem de Usuários",
      },
    },
    usersController.findAll
  );

  app.get(
    "/users/:id",
    {
      schema: {
        tags: ["users"],
        security: [{ bearerAuth: [] }],
        params: findUserByIdParamSchema,
        description: "Listagem de Usuário por ID",
      },
    },
    usersController.findById
  );
};
