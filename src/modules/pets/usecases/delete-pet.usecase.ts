import { NotFoundException } from "@/shared/exceptions";
import prismaPetsRepository from "../repositories/impl/prisma-pets.repository";

class DeletePetByIdUseCase {
  async execute(id: string) {
    const pet = await prismaPetsRepository.find({ id });

    if (!pet) {
      throw new NotFoundException("Pet not found");
    }

    await prismaPetsRepository.delete(pet.id);
  }
}
export default new DeletePetByIdUseCase();
