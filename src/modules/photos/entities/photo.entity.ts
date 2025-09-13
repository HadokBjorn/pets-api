import { PetEntity } from "@/modules/pets/entities/pet.entity";

export class PhotoEntity {
  id: string;
  petId: string;
  image: string;
  pet?: Partial<PetEntity>;

  constructor(photo: PhotoEntity) {
    return Object.assign(this, photo);
  }
}
