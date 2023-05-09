/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort( (a, b) => a - b)
    let result = []
    
    for(let start = 0; start < nums.length; start++) {
        
        if(start > 0 && nums[start] === nums[start - 1 ]) {
                continue
            }
        let pointer = start + 1
        
        let end = nums.length - 1
        while(pointer < end) {

            if(pointer > start + 1 && nums[pointer] === nums[pointer - 1 ]) {
                pointer++
                continue
            }
            let total = nums[start] + nums[pointer] + nums[end]
            if(total > 0) {
                end--
            } else if(total === 0) {
                result.push([nums[start], nums[pointer], nums[end]])
                pointer++
            } else {
                pointer++
            }
        }
    }
    

    
    return result
};