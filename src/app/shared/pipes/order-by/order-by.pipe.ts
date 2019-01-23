import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(collection: any[], field = '', reverse = true): any[] {
    if (field) {
      return collection.sort(
        (a: object, b: object): number =>
          reverse ? b[field] - a[field] : a[field] - b[field]
      );
    }
    return collection.sort(
      (a: any, b: any): number => (reverse ? b - a : a - b)
    );
  }
}
