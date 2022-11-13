/**
 * @param {string} s
 * @return {string[]}
 */

const isValid = (s, starIndex,endIndex) => {
    
}
var restoreIpAddresses = function(s) {
    let result = []
    let path = []
    
    
    const backTracking = (startIndex) => {
        const len = path.length
        if(len > 4 ) return;
        // end the for loop
        if(len === 4 && startIndex=== s.length) {
            result.push(path.join("."))
            return
        }
        
        for(let i = startIndex; i< s.length; i++ ) {
            const str = s.slice(startIndex, i+1);
            
            // each integer is between 0 and 255
            if(str.length > 3 || parseInt(str) > 255) break
            //  cannot have leading zeros
            if(str[0] == 0 && str.length !== 1)  break
            
            path.push(str)
            
            backTracking(i+1)
            path.pop()
        }
    }
    
    backTracking(0)
    return result
    
};