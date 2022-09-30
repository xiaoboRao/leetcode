/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let sArr = s.split("")
    for(let i = 0; i< s.length; i = i + 2*k) {
        let left = i - 1;
        let right = i + k > s.length ? s.length : i + k
        
        while(++left < --right){
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]]
        }
        
    }
    
    return sArr.join("")
};