export namespace PetProperties {
  export const Gender = {
    MALE: "male",
    FEMALE: "female",
  } as const;

  export type Gender = (typeof Gender)[keyof typeof Gender];

  export const Specie = {
    DOG: "dog",
    CAT: "cat",
  } as const;

  export type Specie = (typeof Specie)[keyof typeof Specie];

  export const Status = {
    AVAILABLE: "available",
    PENDING: "pending",
    ADOPTED: "adopted",
  } as const;

  export type Status = (typeof Status)[keyof typeof Status];
}
