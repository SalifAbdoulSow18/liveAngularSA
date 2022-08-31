import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLeft',
})
export class EnvDataPipe implements PipeTransform {

  transform(value: Date): string {
    const currentTime = new Date();
    const diff = currentTime.getTime() - value.getTime();
    const y = Math.floor(diff / 1000 / 60 / 60 / 24 / 12 / 365);
    if (y > 0) {
      return y + 'a';
    }
    const ms = Math.floor(diff / 1000 / 60 / 60 / 24 / 12);
    if (ms > 0) {
      return ms + 'ms';
    }
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    if (d > 0) {
      return d + 'j';
    }
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    if (h > 0) {
      return h + 'h';
    }
    const m = Math.floor((diff / 1000 / 60) % 60);
    if (m > 0) {
      return m + 'm';
    }
    const sd = Math.floor((diff / 1000) % 60);
    if (sd > 0) {
      return sd + 'sd';
      return '1s' ;
    }
  }
}
