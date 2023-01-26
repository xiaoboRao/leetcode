/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    let result = []
    for( let i = 0; i < nums.length; i++) {
      if(map.get(target - nums[i]) === undefined) {
            map.set(nums[i], i)
        } else {
            result.push(map.get(target - nums[i]))
            result.push(i)
            return result
        }  
    }
    
};