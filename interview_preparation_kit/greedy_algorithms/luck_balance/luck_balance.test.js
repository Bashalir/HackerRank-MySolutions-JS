const luckBalance = require('./luck_balance');

describe('luckBalance return  an integer that represents the maximum luck balance achievable.', () => {
  test('luckBalance return 29', () => {
    expect(
      luckBalance(3, [
        [5, 1],
        [2, 1],
        [1, 1],
        [8, 1],
        [10, 0],
        [5, 0],
      ])
    ).toStrictEqual(29);
  });
  test('luckBalance return 42', () => {
    expect(
      luckBalance(5, [[13,1],[10,1],[9,1],[8,1],[13,1],[12,1],[18,1],[13,1]
      ])
    ).toStrictEqual(42);
  });
});
