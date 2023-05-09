/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    let result = []

    for(let i  = 0; i < nums.length; i++) {
        let val = target - nums[i]
        if(map.get(val) >= 0) {
            return [i, map.get(val)]
        } else {
            map.set(nums[i], i)
        }
    }
};