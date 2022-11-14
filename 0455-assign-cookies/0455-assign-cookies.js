/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let result = 0
    console.log(g, s)
    
    let len = g.length
    let index = 0
    for(let i = 0; i< s.length; i++) {
        if(g[index] <= s[i] ) {
            index++
            result++
        }
    }
    return result
};