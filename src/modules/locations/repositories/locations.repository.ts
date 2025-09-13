import { LocationEntity } from "../entities/location.entity";

export abstract class LocationsRepository {
  abstract findAll(filter?: Partial<LocationEntity>): Promise<LocationEntity[]>;
}
