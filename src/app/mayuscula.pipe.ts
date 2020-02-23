import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {

  transform(value) {
    return value[0].toUpperCase() + value.substr(1).toLowerCase();
  }

}
