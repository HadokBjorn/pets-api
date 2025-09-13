import { authRoutes } from "@/modules/auth/routes/auth.route";
import { locationsRoutes } from "@/modules/locations/routes/locations.route";
import { petsRoutes } from "@/modules/pets/routes/pets.route";
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
    await locationsRoutes(privateApp);
    await petsRoutes(privateApp);

    // add other privates routes here
  });
};
