import { createUserBodySchema } from "../create-user/create-user.schema";

export const updateSelfUserBodySchema = createUserBodySchema.partial();
