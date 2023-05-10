/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    nums = nums.sort((a, b) => a - b)
    let result = 1
    let sequenceLength = 1
    for(let i = 0; i < nums.length; i++) {
        // avoid recaculate the length
        if(i > 0 && nums[i] === nums[i - 1]) continue
        if(i > 0 && nums[i] - nums[i - 1] === 1) {
            sequenceLength++
            result = Math.max(sequenceLength, result)
        } else {
            sequenceLength = 1
        }
    }
    return result
};




