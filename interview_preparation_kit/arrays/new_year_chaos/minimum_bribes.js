function minimumBribes(queue) {
  // let bribes = 0;
  // let chaos = false;

  // queue.forEach((place, i) => {
  //   const positionInitial = i + 1;
  //   const differencePosition = place - positionInitial;

  //   if (differencePosition > 2) chaos = true;
  //   if (differencePosition > 0) bribes = bribes + differencePosition;
  // });

  // return chaos ? 'Too chaotic' : bribes;

  let bribes = 0;
  for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[i] - (i + 1) >= 3) return 'Too chaotic';
    for (let j = 0; j < i; j++) {
      if (queue[j] > queue[i]) {
        bribes++;
      }
    }
  }

  return bribes;
}

module.exports = minimumBribes;
