/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length
    let fast = 0
    let slow = 0
    while(fast < n) {
        if(nums[fast] === nums[slow]) {
            fast++
        } else {
           nums[++slow] =  nums[fast++]
        }
    }
    return slow + 1
};