/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = []
    let path = []
    
    const backTracking = (startIndex) => {
        
        if(path.length > 4) return
        if(path.length === 4 && startIndex === s.length) {
            let str = ""
            for(let i =0; i< path.length; i++) {
                
                if(path[i] > 255) return
                if(path[i].length > 1 && path[i][0] == 0) return
                if(i !== path.length - 1) {
                    str += path[i] + '.'
                } else {
                    str += path[i]
                }
            }
            result.push(str)
            return
        }
        
        for(let i = startIndex; i < s.length; i++) {
            path.push(s.slice(startIndex, i + 1))
            backTracking(i + 1)
            path.pop()
        }
      }
    
    backTracking(0, 0)
    return result
    
};