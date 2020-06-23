function minimumSwaps(array) {
  let swaps = 0;
  array.forEach((number, index, array) => {
    const position = index + 1;
    if (number !== position) {
      let indexToSwap;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === position) {
          indexToSwap = i;
          break;
        }
      }
      swaps++;

      array[index] = position;
      array[indexToSwap] = number;
    }
  });
  return swaps;
}

module.exports = minimumSwaps;
