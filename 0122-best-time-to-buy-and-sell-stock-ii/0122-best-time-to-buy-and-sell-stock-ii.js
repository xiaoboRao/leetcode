/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 1) return 0
    let result = 0
    for(let i = 1; i< prices.length; i++) {
        let count =  prices[i] - prices[i - 1]
        if(count > 0) {
            result += count
        }
    }
    return result
};