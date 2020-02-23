import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'borrar'
})
export class BorrarPipe implements PipeTransform {
  cadena;
  transform(value: string, ...args: unknown[]): unknown {
    
    return ""+value;
  }

}
