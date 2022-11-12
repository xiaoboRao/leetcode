/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    let result = []
    let path = []
    let len = candidates.length
    candidates.sort((a,b)=>a-b);
    const backTracking = (startIndex, sum) => {
    
        if(sum === target) {
            result.push([...path])
            return
        }
        
        for(let i = startIndex; i < len; i++) {
            const val =  candidates[i]
            if( i > startIndex && val === candidates[i - 1]) {
                continue
            }
            if(sum + val > target) {
                break
            }
            path.push(val)
            sum += val
            backTracking(i + 1, sum)
            path.pop()
            sum -= val
        }
    }
    
    backTracking(0, 0)
    return result
};