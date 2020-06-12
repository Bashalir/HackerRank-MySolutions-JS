function rotLeft(array, rotation) {
  while (rotation) {
    array.push(array.shift());
    rotation--;
  }
  return array;
}

module.exports = rotLeft;
