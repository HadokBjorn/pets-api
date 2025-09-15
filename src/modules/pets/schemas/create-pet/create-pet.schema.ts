import z from "zod";
import { PetProperties } from "../../enums/pet.enum";

export const createPetBodySchema = z.object({
  name: z.string().min(3),
  specie: z.enum(PetProperties.Specie),
  breed: z.string().min(3),
  ageInMonths: z.number().positive(),
  gender: z.enum(PetProperties.Gender),
  status: z.enum(PetProperties.Status).optional(),
  locationId: z.string(),
  photos: z.array(z.url()).optional(),
});
