const maximumToys = require('./maximum_toys');

describe('maximumToys return the the maximum number of toys Mark can buy for his son', () => {
  test('Mark can pay 4 toys"', () => {
    expect(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)).toStrictEqual(4);
  });

  test('Mark can pay 1 toys"', () => {
    expect(maximumToys([1], 50)).toStrictEqual(1);
  });
});
