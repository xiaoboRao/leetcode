/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    let result = []
    let path = []
    // sort candidates 
    candidates.sort((a, b) => a - b)
    let len = candidates.length
    let used = new Array(len).fill(false)

    const backTracking = (startIndex) => {
    
        let total = 0
        path.forEach( item => {
            total += item
        })
        
        if(total > target) return
        if(total === target) {
            result.push([...path])
            return
        }
        
        for(let i = startIndex; i< len; i++ ) {
            //  used[i - 1] = false : the candidates[i - 1] used in the same brach
            // used[i - 1] = true : the candidates[i - 1] used in the same level
            if(i > 0  && candidates[i ] === candidates[i - 1] && !used[i - 1]) {
                continue
            }
            path.push(candidates[i])
            used[i] = true
            backTracking(i + 1)
            path.pop()
            used[i] = false

        }
    }
    
    backTracking(0)
    return result
};