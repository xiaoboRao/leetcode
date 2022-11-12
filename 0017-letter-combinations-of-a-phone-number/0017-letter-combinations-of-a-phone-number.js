/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    
    let length = digits.length
    if(!length) return []
    
    let result = []
    let path = []
    
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "qprs", "tuv", "wxyz"]
    const backtracking = (digits, length, startIndex) => {
        if(path.length === length) {
            result.push(path.join(''))
            return
        }
        console.log(map[digits[startIndex]])
        for(const value of map[digits[startIndex]]) {
            path.push(value)
            backtracking(digits, length, startIndex + 1)
            path.pop()
        }
    }
    
    backtracking(digits, length, 0)
    return result
    
};