import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): string {
    /*if(!images || images.length === 0)
      return 'assets/img/camera_blocked.jpeg';
    return images[0].url;*/

    return (!images || images.length===0)? 'assets/img/camera_blocked.jpeg' : images[0].url;
  }

}
