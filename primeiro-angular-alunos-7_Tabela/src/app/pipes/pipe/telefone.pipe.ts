import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(telefone: string): string {
    if (telefone.length === 8) {
      return `${telefone.substring(0, 4)}-${telefone.substring(4)}`
    }
    if (telefone.length === 10) {
      return `(0${telefone.substring(0, 2)}) ${telefone.substring(2, 6)}-${telefone.substring(6)}`;
    }
    if (telefone.length === 11) {
      return `(${telefone.substring(0, 3)}) ${telefone.substring(3, 7)}-${telefone.substring(7)}`
    }
    return telefone;
  }

}
