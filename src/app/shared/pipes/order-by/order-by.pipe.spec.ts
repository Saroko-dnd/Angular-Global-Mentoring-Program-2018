import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  const orderByPipe = new OrderByPipe();
  const primitives = [123, 78, 99, 900, 1000, 150, 75];
  const objects = [
    {
      year: 2012,
      month: 8,
      day: 12
    },
    {
      year: 2010,
      month: 4,
      day: 5
    },
    {
      year: 2005,
      month: 9,
      day: 9
    },
    {
      year: 2055,
      month: 1,
      day: 30
    },
    {
      year: 2700,
      month: 12,
      day: 4
    },
  ];

  it('If field is not an empty string and reverse == true it should return reverse sorted collection by specified field value', () => {
    expect(orderByPipe.transform(objects, 'year', true)).toEqual([
      {
        year: 2700,
        month: 12,
        day: 4
      },
      {
        year: 2055,
        month: 1,
        day: 30
      },
      {
        year: 2012,
        month: 8,
        day: 12
      },
      {
        year: 2010,
        month: 4,
        day: 5
      },
      {
        year: 2005,
        month: 9,
        day: 9
      },
    ]);
  });

  it('If field has falsy value and reverse == true it should return reverse sorted collection', () => {
    expect(orderByPipe.transform(primitives, '', true)).toEqual(
      [1000, 900, 150, 123,  99, 78, 75]
    );
  });

  it(`If field is not an enmpty string and reverse == false
      it should return sorted collection of objects by value of specified field`, () => {
    expect(orderByPipe.transform(objects, 'year', false)).toEqual(
        [
          {
            year: 2005,
            month: 9,
            day: 9
          },
          {
            year: 2010,
            month: 4,
            day: 5
          },
          {
            year: 2012,
            month: 8,
            day: 12
          },
          {
            year: 2055,
            month: 1,
            day: 30
          },
          {
            year: 2700,
            month: 12,
            day: 4
          },
        ]
      );
  });

    it(`If field has falsy value string and reverse == false it should return sorted collection`, () => {
      expect(orderByPipe.transform(primitives, '', false)).toEqual(
        [75, 78, 99, 123, 150, 900, 1000]
      );
    });
});
