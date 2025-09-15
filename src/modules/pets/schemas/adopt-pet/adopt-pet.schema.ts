import z from "zod";

export const adoptPetBodySchema = z.object({
  userId: z.uuid(),
  petId: z.uuid(),
});
