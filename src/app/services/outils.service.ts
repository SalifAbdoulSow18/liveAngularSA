import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutilsService {
  constructor() { }

  // tslint:disable-next-line:typedef
  numberSeparator(nbr: number, s: string) {

    let nombre: string = nbr.toString();
    // tslint:disable-next-line:prefer-const
    let reg = /(\d+)(\d{3})/;
    while ( reg.test( nombre)) {
      nombre = nombre.replace( reg, '$1' + s + '$2');
    }
    return nombre;
  }
}
