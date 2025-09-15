import { NotFoundException } from "@/shared/exceptions";
import prismaPetsRepository from "../repositories/impl/prisma-pets.repository";

class FindPetByIdUseCase {
  async execute(id: string) {
    const pet = await prismaPetsRepository.find({ id });

    if (!pet) {
      throw new NotFoundException("Pet not found");
    }

    return pet;
  }
}
export default new FindPetByIdUseCase();
