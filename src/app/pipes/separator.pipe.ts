import { Pipe, PipeTransform } from '@angular/core';
import {OutilsService} from '../services/outils.service';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {

  constructor(private outilService: OutilsService) {
  }

  transform(value: number, s: string): string {
    return this.outilService.numberSeparator(value, s) ;
  }

}
