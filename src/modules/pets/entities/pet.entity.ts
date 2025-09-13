import { UserEntity } from "@/modules/users/entities/user.entity";
import { LocationEntity } from "@/modules/locations/entities/location.entity";
import { PhotoEntity } from "@/modules/photos/entities/photo.entity";
import { PetProperties } from "../enums/pet.enum";

export class PetEntity {
  id: string;
  name: string;
  specie: PetProperties.Specie;
  breed: string;
  ageInMonths: number;
  gender: PetProperties.Gender;
  status: PetProperties.Status;
  locationId: string;
  adoptedAt: Date | null;
  adoptedBy: string | null;
  createdAt: Date;
  updatedAt: Date;
  user?: Partial<UserEntity>;
  location?: Partial<LocationEntity>;
  photos?: Partial<PhotoEntity>[];

  constructor(pet: PetEntity) {
    return Object.assign(this, pet);
  }
}
