const hourglassSum = require('./2d_array-ds');

const arrayHourglass0 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const arrayHourglass1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0],
];

const arrayHourglass2 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

describe('hourglassSum return an integer, the maximum hourglass sum in the array', () => {
  test('Sample Test case 0', () => {
    expect(hourglassSum(arrayHourglass0)).toStrictEqual(19);
  });
  test('Sample Test case 1', () => {
    expect(hourglassSum(arrayHourglass1)).toStrictEqual(13);
  });
  test('Sample Test case 2', () => {
    expect(hourglassSum(arrayHourglass2)).toStrictEqual(28);
  });
});
