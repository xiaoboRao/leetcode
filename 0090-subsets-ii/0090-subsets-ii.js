/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = []
    let path = []
    nums.sort((a,b) => a - b)
    let len = nums.length
    
    const backTracking = (startIndex) => {
       result.push([...path])
        for(let i = startIndex; i < len; i++) {
            if(i > startIndex && nums[i - 1] === nums[i]) continue
            path.push(nums[i])
            backTracking(i + 1)
            path.pop()
        }
    }
    backTracking(0)
    return result
};