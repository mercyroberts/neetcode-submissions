class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // maxProfit(prices) {
    //     let max = 0;
    //     for(let i =0; i < prices.length; i++){
    //         for(let j = i + 1; j < prices.length; j++){
    //             max = Math.max(max, prices[j]-prices[i])
    //         }
    //     }
    //     return max;
    // }

    maxProfit(prices){
        let minPrice = prices[0];
        let maxProfit = 0;

        for(const price of prices){
            minPrice = Math.min(minPrice, price);

            maxProfit = Math.max(maxProfit, price - minPrice);
        }
        return maxProfit;
    }
}
