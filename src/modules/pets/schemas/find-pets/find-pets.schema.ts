import { paginationSchemaParams } from "@/shared/utils/pagination/schemas/pagination.schema";
import z from "zod";
import { PetProperties } from "../../enums/pet.enum";

export const findPetsParamsSchema = paginationSchemaParams.extend({
  name: z.string().optional(),
  specie: z.enum(PetProperties.Specie).optional(),
  breed: z.string().optional(),
  gender: z.enum(PetProperties.Gender).optional(),
  status: z.enum(PetProperties.Status).optional(),
});
