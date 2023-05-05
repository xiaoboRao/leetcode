/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let path = []
    let result = []
    let length = candidates.length
    
    const backTrack = (index, sum) => {
        
        if(sum > target) return
        if(sum === target) result.push([...path])
        
        for(let i = index; i < length; i++) {
            
            path.push(candidates[i])
            backTrack(i, sum + candidates[i])
            path.pop()
        }
    }
    
    backTrack(0, 0)
    return result    
};
