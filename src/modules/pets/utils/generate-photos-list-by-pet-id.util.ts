import { CreatePhotoDto } from "@/modules/photos/dtos/create-photo.dto";

class GeneratePhotosListByPetIdUtil {
  execute(petId: string, photos: string[]): CreatePhotoDto[] {
    return photos.map((photo) => ({ petId, image: photo }));
  }
}
export default new GeneratePhotosListByPetIdUtil();
