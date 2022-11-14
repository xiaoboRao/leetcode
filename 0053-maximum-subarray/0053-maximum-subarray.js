/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = -Infinity
    let count = 0
    let maxIndex= 0
    
    nums.forEach((item, idex) => {
        count += item
        if(count > result) {
            result = count
        }
        
        if(count < 0) {
            count = 0
        }
        
    })
    
    return result
};