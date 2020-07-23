import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if(!images){
      return 'assets/img/noImage.png'
    }
    
    // Si hay algo en el array, coge la primera posición:
    if(images.length > 0 ){
      return images[0].url;
    }else{
       return 'assets/img/noImage.png'
    }

  }

}
