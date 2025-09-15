import z from "zod";

export const findPetByIdParamSchema = z.object({
  id: z.uuid(),
});
