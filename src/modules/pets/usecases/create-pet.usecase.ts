import { CreatePhotoDto } from "@/modules/photos/dtos/create-photo.dto";
import { CreatePetDto } from "../dtos/create-pet.dto";
import prismaPetsRepository from "../repositories/impl/prisma-pets.repository";
import prismaPhotosRepository from "@/modules/photos/repositories/impl/prisma-photos.repository";
import generatePhotosListByPetIdUtil from "../utils/generate-photos-list-by-pet-id.util";

class CreatePetUseCase {
  async execute(data: CreatePetDto) {
    const pet = await prismaPetsRepository.create(data);

    if (data.photos?.length > 0) {
      const photosToCreate = generatePhotosListByPetIdUtil.execute(
        pet.id,
        data.photos
      );

      await prismaPhotosRepository.createMany(photosToCreate);
    }

    return pet;
  }
}

export default new CreatePetUseCase();
