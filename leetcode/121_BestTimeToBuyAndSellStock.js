/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else if (prices[i] - buy > maxProfit) {
      maxProfit = prices[i] - buy;
    }
  }

  return maxProfit;
};

/** 처음 제출한 풀이 */
var maxProfit = function (prices) {
  let buy = prices[0];
  let sell = 0;
  const profits = [];
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
      sell = 0;
    } else {
      sell = Math.max(sell, prices[i]);
    }
    profits.push(sell - buy);
  }

  const maxProfit = Math.max(...profits);
  return maxProfit < 0 ? 0 : maxProfit;
};
