import { PetProperties } from "../enums/pet.enum";
import prismaPetsRepository from "../repositories/impl/prisma-pets.repository";

class StatsPetsUseCase {
  async execute() {
    const [
      adopted,
      available,
      pending,
      male,
      female,
      cats,
      dogs,
      catsAdopted,
      catsAvailable,
      catsPending,
      dogsAdopted,
      dogsAvailable,
      dogsPending,
      // --- male
      catsAdoptedMale,
      catsAvailableMale,
      catsPendingMale,
      dogsAdoptedMale,
      dogsAvailableMale,
      dogsPendingMale,

      // --- female
      catsAdoptedFemale,
      catsAvailableFemale,
      catsPendingFemale,
      dogsAdoptedFemale,
      dogsAvailableFemale,
      dogsPendingFemale,
    ] = await Promise.all([
      prismaPetsRepository.count({ status: PetProperties.Status.ADOPTED }),
      prismaPetsRepository.count({ status: PetProperties.Status.AVAILABLE }),
      prismaPetsRepository.count({ status: PetProperties.Status.PENDING }),
      prismaPetsRepository.count({ gender: PetProperties.Gender.MALE }),
      prismaPetsRepository.count({ gender: PetProperties.Gender.FEMALE }),
      prismaPetsRepository.count({ specie: PetProperties.Specie.CAT }),
      prismaPetsRepository.count({ specie: PetProperties.Specie.DOG }),
      prismaPetsRepository.count({
        status: PetProperties.Status.ADOPTED,
        specie: PetProperties.Specie.CAT,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.AVAILABLE,
        specie: PetProperties.Specie.CAT,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.PENDING,
        specie: PetProperties.Specie.CAT,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.ADOPTED,
        specie: PetProperties.Specie.DOG,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.AVAILABLE,
        specie: PetProperties.Specie.DOG,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.PENDING,
        specie: PetProperties.Specie.DOG,
      }),
      // -- male
      prismaPetsRepository.count({
        status: PetProperties.Status.ADOPTED,
        specie: PetProperties.Specie.CAT,
        gender: PetProperties.Gender.MALE,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.AVAILABLE,
        specie: PetProperties.Specie.CAT,
        gender: PetProperties.Gender.MALE,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.PENDING,
        specie: PetProperties.Specie.CAT,
        gender: PetProperties.Gender.MALE,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.ADOPTED,
        specie: PetProperties.Specie.DOG,
        gender: PetProperties.Gender.MALE,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.AVAILABLE,
        specie: PetProperties.Specie.DOG,
        gender: PetProperties.Gender.MALE,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.PENDING,
        specie: PetProperties.Specie.DOG,
        gender: PetProperties.Gender.MALE,
      }),
      // -- female
      prismaPetsRepository.count({
        status: PetProperties.Status.ADOPTED,
        specie: PetProperties.Specie.CAT,
        gender: PetProperties.Gender.FEMALE,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.AVAILABLE,
        specie: PetProperties.Specie.CAT,
        gender: PetProperties.Gender.FEMALE,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.PENDING,
        specie: PetProperties.Specie.CAT,
        gender: PetProperties.Gender.FEMALE,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.ADOPTED,
        specie: PetProperties.Specie.DOG,
        gender: PetProperties.Gender.FEMALE,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.AVAILABLE,
        specie: PetProperties.Specie.DOG,
        gender: PetProperties.Gender.FEMALE,
      }),
      prismaPetsRepository.count({
        status: PetProperties.Status.PENDING,
        specie: PetProperties.Specie.DOG,
        gender: PetProperties.Gender.FEMALE,
      }),
    ]);

    return {
      adopted,
      available,
      pending,
      male,
      female,
      cats,
      dogs,
      catsAdopted,
      catsAvailable,
      catsPending,
      dogsAdopted,
      dogsAvailable,
      dogsPending,
      // --- machos
      catsAdoptedMale,
      catsAvailableMale,
      catsPendingMale,
      dogsAdoptedMale,
      dogsAvailableMale,
      dogsPendingMale,
      // --- machos
      catsAdoptedFemale,
      catsAvailableFemale,
      catsPendingFemale,
      dogsAdoptedFemale,
      dogsAvailableFemale,
      dogsPendingFemale,
    };
  }
}
export default new StatsPetsUseCase();
