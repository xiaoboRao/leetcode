/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let result = []
    let path = []
    let len = nums.length
    
    const backTracking = (startIndex) => {
        
        result.push([...path])
        
         for(let i = startIndex; i < len; i++) {
             path.push(nums[i])
             backTracking(i + 1)
             path.pop()
         }
    }
    backTracking(0)
    return result
};