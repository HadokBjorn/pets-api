import { CreatePhotoDto } from "@/modules/photos/dtos/create-photo.dto";
import { CreatePetDto } from "../dtos/create-pet.dto";
import prismaPetsRepository from "../repositories/impl/prisma-pets.repository";
import prismaPhotosRepository from "@/modules/photos/repositories/impl/prisma-photos.repository";

class CreatePetUseCase {
  async execute(data: CreatePetDto) {
    const pet = await prismaPetsRepository.create(data);

    if (data.images?.length > 0) {
      const photosToCreate: CreatePhotoDto[] = data.images.map((image) => ({
        petId: pet.id,
        image,
      }));

      await prismaPhotosRepository.createMany(photosToCreate);
    }

    return pet;
  }
}

export default new CreatePetUseCase();
