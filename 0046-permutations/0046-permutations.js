/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    let path = []
    
    let len = nums.length
    let used = []
    const backTracking = () => {
        if(path.length === len) {
            result.push([...path])
        }
        
        for(let i = 0; i < len; i++) {
            if(used[nums[i]]) continue
            used[nums[i]] = true
            path.push(nums[i])
            backTracking(i + 1)
            path.pop()
            used[nums[i]] = false

        }
    }
    
    backTracking()
    return result
};