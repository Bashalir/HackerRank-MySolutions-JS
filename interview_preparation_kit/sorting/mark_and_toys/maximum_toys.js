function maximumToys(prices, budget) {
  const pricesSorted = prices.sort((a, b) => a - b);
  let toy = 0;
  let toysInCart = 0;

  while (budget > 0) {
    budget = budget - pricesSorted[toy];
    toy++;
    if (budget > 0) toysInCart++;
    if (toy >= pricesSorted.length) break;
  }

  return toysInCart;
}

module.exports = maximumToys;
