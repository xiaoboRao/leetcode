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
            return
        }
        for(let i = 0; i< len; i++) {
            if(used[i]) continue
            used[i] = true
            path.push(nums[i])
            backTracking()
            path.pop()
            used[i] = false

        }
    }
    
    backTracking()
    return result
};