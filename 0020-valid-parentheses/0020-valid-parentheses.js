/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++) {
        let item = s[i]
        switch(item) {
            case "(":
                stack.push(")")
                break
            case "[":
                stack.push("]")
                break
            case "{":
                stack.push("}")
                break
            default:
                if(item !== stack.pop()) {
                    return false
                }
                break
        }
    }
    return stack.length === 0
};