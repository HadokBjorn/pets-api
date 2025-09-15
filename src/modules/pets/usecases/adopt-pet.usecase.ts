import prismaUsersRepository from "@/modules/users/repositories/impl/prisma-users.repository";
import { AdoptPetDto } from "../dtos/adopt-pet.dto";
import { NotFoundException } from "@/shared/exceptions";
import prismaPetsRepository from "../repositories/impl/prisma-pets.repository";
import { PetProperties } from "../enums/pet.enum";

class AdoptPetUseCase {
  async execute({ petId, userId }: AdoptPetDto) {
    const user = await prismaUsersRepository.find({ id: userId });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const pet = await prismaPetsRepository.find({ id: petId });

    if (!pet) {
      throw new NotFoundException("Pet not found");
    }

    await prismaPetsRepository.update(pet.id, {
      adoptedAt: new Date(),
      adoptedBy: userId,
      status: PetProperties.Status.ADOPTED,
    });
  }
}
export default new AdoptPetUseCase();
