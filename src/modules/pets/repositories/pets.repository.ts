import { PaginationDto } from "@/shared/utils/pagination/dtos/pagination.dto";
import { CreatePetDto } from "../dtos/create-pet.dto";
import { PetEntity } from "../entities/pet.entity";

export abstract class PetsRepository {
  abstract create(data: CreatePetDto): Promise<PetEntity>;
  abstract find(filter: Partial<PetEntity>): Promise<PetEntity>;
  abstract findAll(
    filter?: Partial<PetEntity> & PaginationDto
  ): Promise<PetEntity[]>;
  abstract update(id: string, data: Partial<PetEntity>): Promise<PetEntity>;
  abstract delete(id: string): Promise<void>;
}
