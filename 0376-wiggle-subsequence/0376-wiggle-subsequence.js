/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if(nums.length < 2) return nums.length
    
    let preDiff = 0
    let curDiff = 0
    let result = 1
    for(let i = 1; i < nums.length; i++) {
        let curDiff = nums[i] - nums[i - 1]
        if((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
            result++
            preDiff = curDiff

        }
    }
    return result
};