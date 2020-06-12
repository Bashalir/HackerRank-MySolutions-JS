const checkMagazine = require('./checkMagazine');

describe('checkMagazine return "Yes" if the note can be formed using the magazine, or "No" ', () => {
  test('checkMagazine return Yes', () => {
    expect(
      checkMagazine('give me one grand today night', 'give one grand today')
    ).toStrictEqual('Yes');
  });

  test('checkMagazine return No', () => {
    expect(
      checkMagazine('two times three is not four', 'two times two is four')
    ).toStrictEqual('No');
  });

  test('checkMagazine return No', () => {
    expect(
      checkMagazine(
        'ive got a lovely bunch of coconuts',
        'ive got some coconuts'
      )
    ).toStrictEqual('No');
  });
});
