/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums = nums.sort((a, b) => a - b)
    let count = 0
    for(let startIndex = 0; startIndex < nums.length - 2; startIndex++ ) {
        for(let innerIndex = startIndex + 1; innerIndex < nums.length - 1; innerIndex++) {
            let pointer = innerIndex + 1
            while(pointer < nums.length && nums[startIndex] + nums[innerIndex] > nums[pointer]) {
                count++
                pointer++
            }
        }
    }
    return count
};

