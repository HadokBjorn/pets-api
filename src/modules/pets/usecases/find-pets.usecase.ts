import { FindPetsDto } from "../dtos/find-pets.dto";
import prismaPetsRepository from "../repositories/impl/prisma-pets.repository";

class FindPetsUseCase {
  async execute(filter?: FindPetsDto) {
    return await prismaPetsRepository.findAll(filter);
  }
}

export default new FindPetsUseCase();
