/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1
    while(l <= r) {
        let mid = l + Math.floor((r - l) / 2) 
        if(target === nums[mid]) {
            return mid
        } else if(target < nums[mid]) {
            r = mid - 1
        } else {
            l =  mid + 1
        }
    }
    return -1
};
