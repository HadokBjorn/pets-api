import { PetProperties } from "../enums/pet.enum";

export class CreatePetDto {
  name: string;
  specie: PetProperties.Specie;
  breed: string;
  ageInMonths: number;
  gender: PetProperties.Gender;
  status: PetProperties.Status;
  locationId: string;
  images?: string[];
}
