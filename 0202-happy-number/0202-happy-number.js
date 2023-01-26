/**
 * @param {number} n
 * @return {boolean}
 */

function getSum(n) {
    let sum = 0
    
    while(n) {
        sum += (n % 10) ** 2
        n = Math.floor(n/ 10)
    }
    return sum
}
var isHappy = function(n) {
    
    let map = new Map()
    
    while(true) {
        // while in a loop and without end
        if(map.has(n)) return false
        if(n === 1) return true
        map.set(n, 1)
        n = getSum(n)
    }
};