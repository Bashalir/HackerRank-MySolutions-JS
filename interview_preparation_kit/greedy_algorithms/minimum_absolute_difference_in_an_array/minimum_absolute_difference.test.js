const minimumAbsoluteDifference = require('./minimum_absolute_difference');

describe('minimumAbsoluteDifference return the minimum absolute difference between any two elements in the array.', () => {
  test('minimumAbsoluteDifference return 3', () => {
    expect(minimumAbsoluteDifference([3, -7, 0])).toStrictEqual(3);
  });
  test('minimumAbsoluteDifference return 1', () => {
    expect(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])).toStrictEqual(1);
  });
});
