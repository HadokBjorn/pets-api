import z from "zod";

export const findLocationsResponseSchema = z.object({
  results: z.array(
    z.object({
      id: z.string(),
      city: z.string(),
    })
  ),
});
