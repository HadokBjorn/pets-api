import z from "zod";

export const loginSchemaBody = z.object({
  email: z.email(),
  password: z.string().min(6),
});
