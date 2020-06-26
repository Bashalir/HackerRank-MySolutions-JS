function minimumAbsoluteDifference(array) {
  let minimumDifference = Math.abs(array[0] - array[1]);

  const arraySorted = array.sort();

  // with loop
  for (let i = 0; i < arraySorted.length - 1; i++) {
    let difference = Math.abs(arraySorted[i + 1] - arraySorted[i]);

    minimumDifference = Math.min(difference, minimumDifference);
  }

  // with reduce
  const reducerminimumDifference = arraySorted.reduce((acc, v, i, arr) => {
    let difference = Math.abs(arr[i + 1] - v);
    return Number.isNaN(difference) ? acc : Math.min(difference, acc);
  }, Number.MAX_SAFE_INTEGER);

  return reducerminimumDifference;
}

module.exports = minimumAbsoluteDifference;
