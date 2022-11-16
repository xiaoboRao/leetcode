/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length === 1) return 0
    let curIndex = 0
    let maxIndex = 0
    let stepCount = 0
    for(let i = 0; i < nums.length; i++) {
        
        maxIndex = Math.max( i + (nums[i]), maxIndex)
        if( maxIndex >= nums.length - 1) return ++stepCount
        
        if(i === curIndex) {
            stepCount++
            curIndex = maxIndex
        }
    }
    
};