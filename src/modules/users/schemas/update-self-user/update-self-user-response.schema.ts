import z from "zod";
import { createUserResponseSchema } from "../create-user/create-user-response.schema";

export const updateSelfUserResponseSchema = z.object({
  result: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    image: z.string().nullable().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
});
