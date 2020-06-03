import { autoinject } from 'aurelia-framework';
import { ImageStore } from '../../services/image-store';

@autoinject
export class Upload {
  selectedFiles: string[] = [];

  constructor(private imageStore: ImageStore) {}

  async doUpload() {
    await this.imageStore.uploadImage(this.selectedFiles[0]);
  }
}
