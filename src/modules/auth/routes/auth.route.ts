import { FastifyTypedInstance } from "@/shared/types/fastify.type";
import authController from "../controllers/auth.controller";
import { loginSchemaBody } from "../schemas/login.schema";
import { createUserBodySchema } from "@/modules/users/schemas/create-user.schema";

export const authRoutes = async (app: FastifyTypedInstance) => {
  app.post(
    "/auth/signup",
    {
      schema: {
        tags: ["auth"],
        description: "Cadastro no sistema",
        body: createUserBodySchema,
      },
    },
    authController.signup
  );

  app.post(
    "/auth/login",
    {
      schema: {
        tags: ["auth"],
        description: "Login no sistema",
        body: loginSchemaBody,
      },
    },
    authController.login
  );
};
