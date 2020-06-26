const minimumSwaps = require('./minimum_swaps');

describe('minimumSwaps return an integer representing the minimum number of swaps to sort the array', () => {
  test.skip('minimum swipe is 3', () => {
    expect(minimumSwaps([4, 3, 1, 2])).toStrictEqual(3);
  });

  test('minimum swipe is 5', () => {
    expect(minimumSwaps([7, 1, 3, 2, 4, 5, 6])).toStrictEqual(5);
  });

});
