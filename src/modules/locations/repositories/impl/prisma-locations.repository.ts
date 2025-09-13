import prisma from "@/database/database.connections";
import { LocationEntity } from "../../entities/location.entity";
import { LocationsRepository } from "../locations.repository";

class PrismaLocationsRepository implements LocationsRepository {
  findAll(filter?: Partial<LocationEntity>): Promise<LocationEntity[]> {
    return prisma.location.findMany();
  }
}

export default new PrismaLocationsRepository();
