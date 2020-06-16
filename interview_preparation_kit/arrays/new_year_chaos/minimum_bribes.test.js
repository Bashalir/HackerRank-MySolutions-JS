const minimumBribes = require('./minimum_bribes');

describe('minimumBribes return minimum number of bribes needed to get the queue or Too chaotic', () => {
  test('minimum bribes is 3', () => {
    expect(minimumBribes([2, 1, 5, 3, 4])).toStrictEqual(3);
  });

  test('minimum bribes is 6', () => {
    expect(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])).toStrictEqual(7);
  });

  test('return Too chaotic a have bribed more 2 people', () => {
    expect(minimumBribes([2, 5, 1, 3, 4])).toBe('Too chaotic');
  });
});
