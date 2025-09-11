import z from "zod";

export const createUserResponseSchema = z.object({
  result: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    image: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
    accessToken: z.string(),
  }),
});
