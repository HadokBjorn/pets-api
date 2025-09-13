import { createPetBodySchema } from "../create-pet/create-pet.schema";

export const updatePetBodySchema = createPetBodySchema.partial();
