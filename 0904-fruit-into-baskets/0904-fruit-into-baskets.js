/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    // type: count
    let map = new Map()
    let result = 0
    let left = 0
    let right = 0 
    while(right < fruits.length) {
        if(map.size < 2) {
            map.set(fruits[right], (map.get(fruits[right]) || 0) + 1)
            right++
            result = Math.max(right - left, result)
            continue
        }
        if(map.get(fruits[right])) {
            map.set(fruits[right], (map.get(fruits[right]) || 0) + 1)
            right++
            result = Math.max(right - left, result)
            continue
         } 
        if(!map.get(fruits[right])){
             const fruit = map.get(fruits[left]) - 1
            if(fruit === 0) {
                map.delete(fruits[left], fruit)
            } else {
                map.set(fruits[left], fruit)
            }
             left++
            continue
            
        }
    }
    return result
};