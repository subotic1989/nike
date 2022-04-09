import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products',
})
export class ProductsPipe implements PipeTransform {
  transform(value: any, limit: any): any {
    const [first, second, filteredBy] = limit.split(' ');

    if (value?.length === 0) {
      return;
    }
    const results: any = [];

    value?.forEach((el: any) => {
      if (el[filteredBy] > +first && el[filteredBy] < +second) {
        results.push(el);
      }
    });
    return results;
  }
}
