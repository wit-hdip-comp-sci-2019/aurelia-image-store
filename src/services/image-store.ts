import * as environment from '../../config/environment.json';
import { HttpClient } from 'aurelia-http-client';

interface Image {
  url: string;
  id: string;
}

export class ImageStore {
  images: Image[] = [];

  getAllImages(): Image[] {
    return this.images;
  }

  async uploadImage(imageFile) {
    const cloudClient = new HttpClient();
    cloudClient.configure(http => {
      http.withBaseUrl(`https://api.cloudinary.com/v1_1/${environment.cloudinary.name}`);
    });
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', `${environment.cloudinary.preset}`);

    try {
      const response = await cloudClient.post('/image/upload', formData);
    } catch (err) {
      console.log(err);
    }
  }

  deleteImage(id) {}
}
