/**
 * @param {string} s
 * @return {string[][]}
 */



var partition = function(s) {
    
    let path = []
    let result = []
    let len = s.length
    const isPalindrome = (str) => {
        let strLen = str.length
        for(let i = 0; i< strLen; i++) {
            if(str[i] !== str[--strLen]) return false
        }
        return true
        
    }
    const backTracking = (startIndex) => {
        // if path is not palindrome arr, then  just return
        let flag = false
        path.forEach( item => {
                if(!isPalindrome(item)) {
                    flag = true
                }
            }
        )
        if(flag) return
        // you should collect the element util end , now path is palindrome arr
        if(startIndex === len) {
            result.push([...path])
        }
        
        for(let i = startIndex; i<len; i++) {
            let str = s.substr(startIndex, i - startIndex + 1);
            path.push(str)
            backTracking(i + 1)
            path.pop()
        }
        
    }
    
    backTracking(0)
    return result
};