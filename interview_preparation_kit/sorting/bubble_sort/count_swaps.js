function countSwaps(array) {
  let swaps = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swaps++;
      }
      
    }
  }

  return `${swaps} ${array[0]} ${array[array.length-1]}`;
}

module.exports = countSwaps;
