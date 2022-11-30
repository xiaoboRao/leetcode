/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let path = []
    let result = []
    let length = candidates.length
    
    const backTracking = (startIndex) => {
        let total  = 0
        path.forEach( item => {
           total += item     
        })
        if(total > target) return
        if(total === target) {
            result.push([...path])
            return
        }
        for(let i = startIndex; i < length; i++) {
            path.push(candidates[i])
            backTracking(i)
            path.pop()
        }
    }
    
    backTracking(0)
    return result
    
};