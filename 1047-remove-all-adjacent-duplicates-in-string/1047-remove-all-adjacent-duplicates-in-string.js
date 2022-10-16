/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    let result = ""
    for(let i = 0; i < s.length; i++) {
        let topItem = stack[stack.length - 1]
        if(s[i] === topItem) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.join("")
};