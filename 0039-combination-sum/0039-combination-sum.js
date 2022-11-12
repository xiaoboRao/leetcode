/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    let path = []
    let result = []
    let length = candidates.length
    
    const backTracking = (candidates, startIndex) => {
        let total = 0
        path.forEach(val => {
            total += val
        })
        
        if(total === target) {
            result.push([...path])
            return
        }
        if(total > target) return
        
        for(let i = startIndex;  i < length; i++) {
            
            path.push(candidates[i])
            backTracking(candidates, i)
            path.pop()
        }
    }
    
    backTracking(candidates, 0)
    return result
    
};