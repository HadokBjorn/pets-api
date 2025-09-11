import { FastifyTypedInstance } from "@/shared/types/fastify.type";
import usersController from "../controllers/users.controller";
import { findUserByIdParamSchema } from "../schemas/find-user-by-id/find-user-by-id.schema";
import { findUsersResponseSchema } from "../schemas/find-users/find-users-response.schema";
import { findUserByIdResponseSchema } from "../schemas/find-user-by-id/find-user-by-id-response.schema";
import { updateSelfUserBodySchema } from "../schemas/update-self-user/update-self-user.schema";
import { updateSelfUserResponseSchema } from "../schemas/update-self-user/update-self-user-response.schema";

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

  app.patch(
    "/users/update-self",
    {
      schema: {
        tags: ["users"],
        security: [{ bearerAuth: [] }],
        description: "Atualização do usuário logado no sistema",
        body: updateSelfUserBodySchema,
        response: {
          200: updateSelfUserResponseSchema,
        },
      },
    },
    usersController.updateSelf
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
