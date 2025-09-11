import { authRoutes } from "@/modules/auth/routes/auth.route";
import { usersRoutes } from "@/modules/users/routes/users.route";
import { authorization } from "@/shared/middlewares";
import { FastifyTypedInstance } from "@/shared/types/fastify.type";

export const routes = async (app: FastifyTypedInstance) => {
  // public routes
  await authRoutes(app);

  // private routes
  await app.register(async (privateApp) => {
    privateApp.addHook("preHandler", authorization);

    await usersRoutes(privateApp);

    // add other privates routes here
  });
};
