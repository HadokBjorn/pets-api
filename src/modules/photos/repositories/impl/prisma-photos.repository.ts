import prisma from "@/database/database.connections";
import { CreatePhotoDto } from "../../dtos/create-photo.dto";
import { PhotosRepository } from "../photos.repository";

class PrismaPhotosRepository implements PhotosRepository {
  async createMany(data: CreatePhotoDto[]): Promise<void> {
    await prisma.photo.createMany({ data });
  }
}
export default new PrismaPhotosRepository();
