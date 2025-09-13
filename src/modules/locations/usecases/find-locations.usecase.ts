import prismaLocationsRepository from "../repositories/impl/prisma-locations.repository";

class FindLocationsUseCase {
  async execute() {
    return await prismaLocationsRepository.findAll();
  }
}
export default new FindLocationsUseCase();
