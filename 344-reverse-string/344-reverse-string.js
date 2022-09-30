/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = -1
    let right = s.length
    
    while(++left < --right) {
        [s[left], s[right] ] = [s[right], s[left]]
    }
};