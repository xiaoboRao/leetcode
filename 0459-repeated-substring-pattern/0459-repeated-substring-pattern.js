/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    
    for(let i = 0; i < s.length - 1; i++) {
        let subStr = s.slice(0, i + 1)
        let appenStr =''
        while(appenStr.length < s.length) {
            appenStr += subStr
        }
        if(s === appenStr) return true
        else {
            continue;
        }
    }
    return false
};