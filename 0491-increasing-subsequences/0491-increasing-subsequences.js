/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let result = []
    let path = []

    let len = nums.length
    const backTracking = (startIndex) => {
        
        if(path.length >= 2) {
            result.push([...path])
            // return
        }
            let map = []
        for(let i = startIndex; i < len; i++) {
            // make sure the elements in path is increasing
            if( (nums[i] < path[path.length - 1]) || (map[nums[i] + 100]) ) continue
            map[nums[i] + 100] = true
            path.push(nums[i]) 
            backTracking(i + 1)
            path.pop()
        }
    }
    
    backTracking(0)
    return result
};