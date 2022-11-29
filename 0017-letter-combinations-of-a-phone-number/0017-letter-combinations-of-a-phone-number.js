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
    const backtracking = (startIndex) => {
        
        if(path.length === length) {
            let str = ''
            path.forEach( item => {
                str += item
            })
            result.push(str)
            return
        }
        for(const val of map[parseInt(digits[startIndex])]) {
            path.push(val)
            backtracking(startIndex + 1)
            path.pop()
        }
    }
    
    backtracking( 0)
    return result
    
};