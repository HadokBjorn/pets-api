import { PetEntity } from "@/modules/pets/entities/pet.entity";

export class LocationEntity {
  id: string;
  city: string;
  pets?: Partial<PetEntity>[];

  constructor(location: LocationEntity) {
    return Object.assign(this, location);
  }
}
