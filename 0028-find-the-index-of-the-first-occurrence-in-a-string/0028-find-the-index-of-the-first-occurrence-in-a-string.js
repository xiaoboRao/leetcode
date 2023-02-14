/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if(needle === '') return -1
    for(let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0
        for(; j < needle.length; j++) {
            
            if(needle[j] !== haystack[i + j]) break
            
        }
        if(j === needle.length) return i
    }
    return -1
    
};