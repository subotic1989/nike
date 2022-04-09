import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'home',
})
export class HomePipe implements PipeTransform {
  transform(value: string, limit: number): unknown {
    return value.substring(0, limit) + '...';
  }
}
