/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set()
    let result = []
    nums1.forEach( num => {
        if(!set.add(num)) {
            set.add(num,  1)
        } 
    })
    
    nums2.forEach( num => {
        if(set.has(num)) {
            result.push(num) 
            set.delete(num)
        }
    })
    return result
};