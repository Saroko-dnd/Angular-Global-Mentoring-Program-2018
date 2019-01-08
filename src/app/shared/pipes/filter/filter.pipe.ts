import { Pipe, PipeTransform } from '@angular/core';
import { isEqual } from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(
    collection: any[],
    field: string,
    value: any,
    exactMatch: boolean = false
  ): any[] {
    if (value === undefined) {
      return collection;
    }

    if (field) {
      return collection.filter(item =>
        !exactMatch && typeof item[field] === 'string'
          ? (<string>item[field]).match(new RegExp(value, 'i'))
          : item[field] === value
      );
    }

    return collection.filter(item =>
      !exactMatch && typeof item === 'string'
        ? (<string>item).match(new RegExp(value, 'i'))
        : isEqual(item, value)
    );
  }
}
