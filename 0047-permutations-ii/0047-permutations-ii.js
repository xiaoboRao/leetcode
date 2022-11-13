/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = []
    let path = []
    let len = nums.length
    nums.sort((a, b) => a - b)
    let used = []
    const backTracking = () => {
        
        if(path.length === len) {
            result.push([...path])
            return
        }
        
        for(let i = 0; i < len; i++) {
            if(i > 0 && nums[i] === nums[i - 1] && used[i - 1]) continue
            
            if(!used[i]) {
                used[i] = true
                path.push(nums[i])
                backTracking()
                path.pop()
                used[i] = false
            }
          
        }
    }
    
    backTracking()
    return result
};