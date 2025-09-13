import { CreatePetDto } from "../dtos/create-pet.dto";
import prismaPetsRepository from "../repositories/impl/prisma-pets.repository";

class CreatePetUseCase {
  async execute(data: CreatePetDto) {
    return await prismaPetsRepository.create(data);
  }
}

export default new CreatePetUseCase();
