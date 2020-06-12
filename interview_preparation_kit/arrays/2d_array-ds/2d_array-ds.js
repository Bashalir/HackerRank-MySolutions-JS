function hourglassSum(array) {
  let hourglassLargest = -99;
  for (let y = 0; y < 4; y++) {
    for (let i = 0; i < 4; i++) {
      const hourglass =
        array[y][i] +
        array[y][i + 1] +
        array[y][i + 2] +
        array[y + 1][i + 1] +
        array[y + 2][i] +
        array[y + 2][i + 1] +
        array[y + 2][i + 2];

      if (hourglass > hourglassLargest) {
        hourglassLargest = hourglass;
      }
    }
  }
  return hourglassLargest;
}

module.exports = hourglassSum;
