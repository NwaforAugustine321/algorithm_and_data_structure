//You are given an array prices where prices[i] is the price of a given stock on the ith day.

//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {
  return backtrack(prices, 0);
};

const backtrack = function (prices, start, result = 0) {
  if (start === prices.length) {
    return result;
  }

  let i = start;
  while (i < prices.length) {
    if (prices[i + 1] > prices[start]) {
      result = Math.max(prices[i + 1] - prices[start], result);
    } else {
      return backtrack(prices, start + 1, result);
    }
    i++;
  }
};

maxProfit([7, 1, 5, 3, 6, 4, 9, 10, 80, 0]);
