import { FastifyTypedInstance } from "@/shared/types/fastify.type";
import usersController from "../controllers/users.controller";
import { findUserByIdParamSchema } from "../schemas/find-user-by-id.schema";
import { findUsersResponseSchema } from "../schemas/find-users-response.schema";
import { findUserByIdResponseSchema } from "../schemas/find-user-by-id-response.schema";

export const usersRoutes = async (app: FastifyTypedInstance) => {
  app.get(
    "/users",
    {
      schema: {
        tags: ["users"],
        security: [{ bearerAuth: [] }],
        description: "Listagem de Usuários",
        response: {
          200: findUsersResponseSchema,
        },
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
        response: {
          200: findUserByIdResponseSchema,
        },
      },
    },
    usersController.findById
  );
};
