class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        
    let buy = prices[0];
    let profit = 0;

    for (let price of prices) {
        buy = Math.min(buy, price);
        profit = Math.max(profit, price - buy);
    }

    return profit;
};
    }
