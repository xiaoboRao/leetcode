/**
 * @param {string} s
 * @return {string[][]}
 */

const isPalindrome = (s, left, rright) => {
    for (let i = left, j = rright; i < j; i++, j--) {
        if(s[i] !== s[j]) return false;
    }
    return true;
}
var partition = function(s) {
    
    let path = []
    let result = []
    
    let len = s.length
    
    const backTracking = (startIndex) => {
        if(startIndex >= len) {
            result.push([...path])
            return
        }
        
        for(let i = startIndex; i < len; i++ ) {
            if(!isPalindrome(s, startIndex, i)) continue
            path.push(s.slice(startIndex, i+1))
            backTracking(i + 1)
            path.pop()
        }
        
    }
    
    backTracking(0)
    return result
};