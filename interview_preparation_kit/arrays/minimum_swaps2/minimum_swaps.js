function minimumSwaps(array) {
  let swaps = 0;
  array.forEach((number, index, array) => {
    const position = index + 1;
    if (number !== position) {
      let indexToSwap;
      for (let i = index; i < array.length; i++) {
        if (array[i] === position) {
          indexToSwap = i;
          break;
        }
      }
      swaps++;

      array[index] = position;
      array[indexToSwap] = number;
      console.log(index,indexToSwap,array[index], array[indexToSwap]);
    }
  });
  return swaps;
}

module.exports = minimumSwaps;
