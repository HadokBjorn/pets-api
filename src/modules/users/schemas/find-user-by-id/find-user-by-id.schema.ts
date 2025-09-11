import z from "zod";

export const findUserByIdParamSchema = z.object({
  id: z.uuid(),
});
