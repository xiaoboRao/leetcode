/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slowIndex = 0
    let fastIndex = 0
    let zeroCount = 0
    while(fastIndex < nums.length) {
        if(nums[fastIndex] === 0) {
            fastIndex++
            zeroCount++
            continue
        }
        nums[slowIndex++] = nums[fastIndex++]
    }
    for(let i = nums.length - zeroCount; i < nums.length; i++) {
        nums[i] = 0
    }
};