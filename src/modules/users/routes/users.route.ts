import { FastifyTypedInstance } from "@/shared/types/fastify.type";
import usersController from "../controllers/users.controller";

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
};
