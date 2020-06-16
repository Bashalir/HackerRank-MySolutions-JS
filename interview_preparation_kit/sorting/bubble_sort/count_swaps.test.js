const countSwaps = require('./count_swaps');

describe('countSwaps return the number of swaps, the first element and the last element ', () => {
  test('countSwaps return "3 1 6"', () => {
    expect(countSwaps([6, 4, 1])).toBe('3 1 6');
  });
  test('countSwaps return "4 2 3 1"', () => {
    expect(countSwaps([4, 2, 3, 1])).toBe('5 1 4');
  });
});
