/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let set = new Set()
    for(let index = 0; index < nums.length; index++) {
        if(set.has(nums[index])) {
            return nums[index]
        } else {
            set.add(nums[index])
        }
    }
};