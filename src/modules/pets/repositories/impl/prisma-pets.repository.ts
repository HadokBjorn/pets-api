import prisma from "@/database/database.connections";

import filteringUtil from "@/shared/utils/filtering/filtering.util";
import { TextSearchMode } from "@/shared/enums/filtering.enum";
import { PetsRepository } from "../pets.repository";
import { PetEntity } from "../../entities/pet.entity";
import { CreatePetDto } from "../../dtos/create-pet.dto";
import { PetProperties } from "../../enums/pet.enum";
import paginationUtil from "@/shared/utils/pagination/pagination.util";
import { PaginationDto } from "@/shared/utils/pagination/dtos/pagination.dto";

class PrismaPetsRepository implements PetsRepository {
  create({
    name,
    ageInMonths,
    breed,
    gender,
    locationId,
    specie,
    status,
  }: CreatePetDto): Promise<PetEntity> {
    return prisma.pet.create({
      data: {
        name,
        ageInMonths,
        breed,
        gender,
        specie,
        status: status ? status : PetProperties.Status.AVAILABLE,
        location: { connect: { id: locationId } },
      },
      include: { location: true },
    });
  }

  find(filter: Partial<PetEntity>): Promise<PetEntity> {
    return prisma.pet.findFirst({
      where: {
        AND: [
          filteringUtil.text("id", filter.id, TextSearchMode.Exact),
          filteringUtil.text("name", filter.name),
          filteringUtil.text("breed", filter.breed),
          filteringUtil.text("status", filter.status, TextSearchMode.Exact),
          filteringUtil.text("specie", filter.specie, TextSearchMode.Exact),
          filteringUtil.text("gender", filter.gender, TextSearchMode.Exact),
        ],
      },
      include: {
        location: true,
        photos: { select: { id: true, image: true } },
      },
    });
  }

  findAll(filter?: Partial<PetEntity> & PaginationDto): Promise<PetEntity[]> {
    return prisma.pet.findMany({
      where: {
        AND: [
          filteringUtil.text("name", filter?.name),
          filteringUtil.text("breed", filter?.breed),
          filteringUtil.text("status", filter?.status, TextSearchMode.Exact),
          filteringUtil.text("specie", filter?.specie, TextSearchMode.Exact),
          filteringUtil.text("gender", filter?.gender, TextSearchMode.Exact),
        ],
      },
      ...paginationUtil.buildParams({
        limit: filter?.limit,
        page: filter?.page,
        order: filter?.order,
        sortBy: filter?.sortBy,
      }),
      include: {
        location: true,
        photos: { select: { id: true, image: true } },
      },
    });
  }

  update(id: string, data: Partial<PetEntity>): Promise<PetEntity> {
    return prisma.pet.update({
      where: { id },
      data: {
        name: data.name,
        ageInMonths: data.ageInMonths,
        breed: data.breed,
        gender: data.gender,
        specie: data.specie,
        status: data.status,
        location: data.locationId
          ? { connect: { id: data.locationId } }
          : undefined,
        adoptedAt: data.adoptedAt,
        user: data.adoptedBy ? { connect: { id: data.adoptedBy } } : undefined,
      },
      include: {
        location: true,
        photos: { select: { id: true, image: true } },
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.pet.delete({
      where: { id },
    });
  }

  count(filter?: Partial<PetEntity>): Promise<number> {
    return prisma.pet.count({
      where: {
        AND: [
          filteringUtil.text("name", filter?.name),
          filteringUtil.text("breed", filter?.breed),
          filteringUtil.text("status", filter?.status, TextSearchMode.Exact),
          filteringUtil.text("specie", filter?.specie, TextSearchMode.Exact),
          filteringUtil.text("gender", filter?.gender, TextSearchMode.Exact),
        ],
      },
    });
  }
}

export default new PrismaPetsRepository();
