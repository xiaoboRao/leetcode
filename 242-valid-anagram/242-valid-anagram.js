/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const temp = new Array(26).fill(0)

    for(let i of s) {
        temp[i.charCodeAt() - 'a'.charCodeAt()] +=1
    }

    for(let i of t) {
        if(temp[i.charCodeAt() - 'a'.charCodeAt()] === 0) return false;
        temp[i.charCodeAt() - 'a'.charCodeAt()] -=1
    }

    return true
};