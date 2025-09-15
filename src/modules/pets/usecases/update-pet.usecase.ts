import { NotFoundException } from "@/shared/exceptions";
import { UpdatePetDto } from "../dtos/update-pet.dto";
import prismaPetsRepository from "../repositories/impl/prisma-pets.repository";
import prismaPhotosRepository from "@/modules/photos/repositories/impl/prisma-photos.repository";
import generatePhotosListByPetIdUtil from "../utils/generate-photos-list-by-pet-id.util";

class UpdatePetUseCase {
  async execute(id: string, data: UpdatePetDto) {
    const pet = await prismaPetsRepository.find({ id });

    if (!pet) {
      throw new NotFoundException("Pet not found");
    }

    const { photos, ...dataWithoutPhotos } = data;

    if (photos?.length > 0) {
      
      if (pet.photos?.length > 0) {
        await prismaPhotosRepository.deleteMany(pet.id);
      }

      const photosToCreate = generatePhotosListByPetIdUtil.execute(
        pet.id,
        photos
      );

      await prismaPhotosRepository.createMany(photosToCreate);
    }

    return await prismaPetsRepository.update(pet.id, dataWithoutPhotos);
  }
}
export default new UpdatePetUseCase();
