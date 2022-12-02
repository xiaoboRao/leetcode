/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let result = []
    let path = []

    let len = nums.length
    const backTracking = (startIndex) => {
        
        if(path.length > 1) {
             result.push([...path])
        }
        let unset = []
        for(let i = startIndex; i < len; i++ ) {
            if( (path.length > 0 && nums[i] < path[ path.length - 1 ] )) continue
            if( unset[nums[i]]) continue
            unset[nums[i]] = true
            path.push(nums[i])
            backTracking(i + 1)
            path.pop()
        }
        
    }
    
    backTracking(0)
    return result
};