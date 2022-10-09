/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length
    let fast = 1
    let slow = 1
    while(fast < n) {
        
        if(nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast]
            slow++
        } 
            fast++
    
    }
    return slow
};