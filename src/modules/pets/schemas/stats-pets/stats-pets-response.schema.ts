import z from "zod";

export const statsPetsResponseSchema = z.object({
  result: z.object({
    adopted: z.number().nonnegative(),
    available: z.number().nonnegative(),
    pending: z.number().nonnegative(),
    male: z.number().nonnegative(),
    female: z.number().nonnegative(),
    cats: z.number().nonnegative(),
    dogs: z.number().nonnegative(),
    catsAdopted: z.number().nonnegative(),
    catsAvailable: z.number().nonnegative(),
    catsPending: z.number().nonnegative(),
    dogsAdopted: z.number().nonnegative(),
    dogsAvailable: z.number().nonnegative(),
    dogsPending: z.number().nonnegative(),
    // --- machos
    catsAdoptedMale: z.number().nonnegative(),
    catsAvailableMale: z.number().nonnegative(),
    catsPendingMale: z.number().nonnegative(),
    dogsAdoptedMale: z.number().nonnegative(),
    dogsAvailableMale: z.number().nonnegative(),
    dogsPendingMale: z.number().nonnegative(),
    // --- machos
    catsAdoptedFemale: z.number().nonnegative(),
    catsAvailableFemale: z.number().nonnegative(),
    catsPendingFemale: z.number().nonnegative(),
    dogsAdoptedFemale: z.number().nonnegative(),
    dogsAvailableFemale: z.number().nonnegative(),
    dogsPendingFemale: z.number().nonnegative(),
  }),
});
