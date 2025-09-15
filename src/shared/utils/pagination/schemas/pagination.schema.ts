import z from "zod";

export const paginationSchemaParams = z.object({
  page: z.coerce.number().nonnegative().optional(),
  limit: z.coerce.number().positive().optional(),
  sortBy: z.string().min(3).optional(),
  order: z.enum(["asc", "desc"]).optional(),
});
