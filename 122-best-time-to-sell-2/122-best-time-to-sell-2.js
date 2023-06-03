/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0
    
        for(let i = 0; i< prices?.length -1; i++) {
            const curr = prices[i]
            const  differ = prices[i+1] - curr 
            if(differ>0) {
                profit += differ
            }
        }
        return profit
    };