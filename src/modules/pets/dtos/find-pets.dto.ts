import { PetProperties } from "../enums/pet.enum";
import { PaginationDto } from "@/shared/utils/pagination/dtos/pagination.dto";

export class FindPetsDto extends PaginationDto {
  name?: string;
  specie?: PetProperties.Specie;
  breed?: string;
  gender?: PetProperties.Gender;
  status?: PetProperties.Status;
}
