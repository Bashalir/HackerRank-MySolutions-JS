const minimumSwaps = require('./minimum_swaps');

describe('minimumSwaps return an integer representing the minimum number of swaps to sort the array', () => {
  test('minimum swipe is 3', () => {
    expect(minimumSwaps([4, 3, 1, 2])).toStrictEqual(3);
  });

});
