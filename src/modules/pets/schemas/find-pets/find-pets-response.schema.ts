import z from "zod";
import { PetProperties } from "../../enums/pet.enum";

export const findPetsResponseSchema = z.object({
  results: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      specie: z.enum(PetProperties.Specie),
      breed: z.string(),
      ageInMonths: z.number().positive(),
      gender: z.enum(PetProperties.Gender),
      status: z.enum(PetProperties.Status),
      locationId: z.string(),
      location: z.object({ id: z.string(), city: z.string() }),
      photos: z
        .array(z.object({ id: z.string(), image: z.string() }))
        .optional(),
      adoptedAt: z.date().nullable(),
      adoptedBy: z.string().nullable(),
      createdAt: z.date(),
      updatedAt: z.date(),
    })
  ),
});
