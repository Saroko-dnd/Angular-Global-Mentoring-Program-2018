import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const filterPipe = new FilterPipe();
  const primitives = [23, 45, 88, 9, 9 , 5, 5, 45, 33];
  const strings = ['good', 'yellow', 'car', 'CAR', 'gray', 'green', 'GreeN', 'luck'];
  const objects = [
    {
      happy: true,
      name: 'Max'
    },
    {
      happy: false,
      name: 'John'
    },
    {
      happy: false,
      name: 'Jack'
    },
    {
      happy: true,
      name: 'Mike'
    },
    {
      happy: true,
      name: 'William'
    }
  ];

  it('It should return collection without any changes if value argument is undefined', () => {
    expect(filterPipe.transform(primitives, '', undefined)).toEqual(primitives);
  });

  it('if field argument has falsy value it should return collection without items that are not deeply equal to value argument', () => {
    expect(filterPipe.transform(primitives, '', 9)).toEqual([9, 9]);
    expect(filterPipe.transform(primitives, null, 9)).toEqual([9, 9]);
    expect(filterPipe.transform(objects, undefined, {
      happy: true,
      name: 'Max'
    })).toEqual([{
      happy: true,
      name: 'Max'
    }]);
  });

  it('If field argument specified it should return collection filtered by value of this field', () => {
    expect(filterPipe.transform(objects, 'happy', true)).toEqual([
      {
        happy: true,
        name: 'Max'
      },
      {
        happy: true,
        name: 'Mike'
      },
      {
        happy: true,
        name: 'William'
      }
    ]);
  });

  it(`If type of value argument is string and exactMatch argument has falsy value
        it should return all items that contain this string (ignoring register)`, () => {
    expect(filterPipe.transform(strings, '', 'gre')).toEqual([
      'green', 'GreeN'
    ]);

    expect(filterPipe.transform(objects, 'name', 'm')).toEqual([
      {
        happy: true,
        name: 'Max'
      },
      {
        happy: true,
        name: 'Mike'
      },
      {
        happy: true,
        name: 'William'
      }
    ]);
  });

  it(`If type of value argument is string and exactMatch argument has truthy value
      it should compare strings and return only items that have equal value`, () => {
    expect(filterPipe.transform(strings, '', 'gre', true).length).toEqual(0);
    expect(filterPipe.transform(strings, '', 'green', true)).toEqual(['green']);

    expect(filterPipe.transform(objects, 'name', 'M', true).length).toEqual(0);
    expect(filterPipe.transform(objects, 'name', 'Max', true)).toEqual([
      {
        happy: true,
        name: 'Max'
      }
    ]);
  });
});
