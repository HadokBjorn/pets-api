import { createUserBodySchema } from "../create-user/create-user.schema";

export const updateUserBodySchema = createUserBodySchema.partial();
