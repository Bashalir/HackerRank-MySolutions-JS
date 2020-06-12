const rotLeft = require('./rotLeft');

test('1. rotLeft returns an updated array after left rotation', () => {
  expect(rotLeft([1, 2, 3, 4, 5], 4)).toStrictEqual([5, 1, 2, 3, 4]);
});

test('2. rotLeft returns an updated array after left rotation', () => {
  expect(
    rotLeft(
      [
        41,
        73,
        89,
        7,
        10,
        1,
        59,
        58,
        84,
        77,
        77,
        97,
        58,
        1,
        86,
        58,
        26,
        10,
        86,
        51,
      ],
      10
    )
  ).toStrictEqual([
    77,
    97,
    58,
    1,
    86,
    58,
    26,
    10,
    86,
    51,
    41,
    73,
    89,
    7,
    10,
    1,
    59,
    58,
    84,
    77,
  ]);
});

test('3. rotLeft returns an updated array after left rotation', () => {
  expect(
    rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13)
  ).toStrictEqual([87, 97, 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60]);
});
