/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
   return  cleanString(s) === cleanString(t)
};

function cleanString(str) {
    let stack = []
    for(const s of str) {
        if(s === '#') {
            stack.length > 0 && stack.pop()
        } else {
            stack.push(s)
         }     
    }
    return stack.join()
}