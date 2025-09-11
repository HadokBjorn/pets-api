import z from "zod";

export const findUserByIdResponseSchema = z.object({
  result: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    image: z.string().nullable().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
});
