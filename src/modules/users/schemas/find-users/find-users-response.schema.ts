import z from "zod";

export const findUsersResponseSchema = z.object({
  results: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      image: z.string().nullable().optional(),
      createdAt: z.date(),
      updatedAt: z.date(),
    })
  ),
});
