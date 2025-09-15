import { CreatePhotoDto } from "../dtos/create-photo.dto";

export abstract class PhotosRepository {
  abstract createMany(data: CreatePhotoDto[]): Promise<void>;
}
