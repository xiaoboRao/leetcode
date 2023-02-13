/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let slowIndex = 0
    let fastIndex = 0
    
    for(const num of nums) {
        
        if( num !== val) {
         nums[slowIndex++] = nums[fastIndex++]
       } else {
           fastIndex++
       }
    }
    
    return slowIndex
};