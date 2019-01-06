import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(collection: any[], field?: string, order?: string): any[] {
    if (field) {
      return collection.sort(
        (a: object, b: object): number =>
          order === 'desc' ? b[field] - a[field] : a[field] - b[field]
      );
    }
    return collection.sort(
      (a: any, b: any): number => (order === 'desc' ? b - a : a - b)
    );
  }
}
