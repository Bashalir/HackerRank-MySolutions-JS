function luckBalance(maxImportantContests, contests) {
  let maxAmount = 0;
  let importantContests = [];

  contests.forEach((amountOfLuck) => {
    if (amountOfLuck[1] == 0) {
      maxAmount += amountOfLuck[0];
    } else {
      importantContests.push(amountOfLuck[0]);
    }
  });

  importantContests.sort((a, b) => b - a);

  importantContests.forEach((amountOfLuck,index)=> {
    if (index + 1 <= maxImportantContests) {
        maxAmount += amountOfLuck;
      } else {
        maxAmount -= amountOfLuck;
      }
  })

  return maxAmount;
}

module.exports = luckBalance;
