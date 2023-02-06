/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const twoSumMap = new Map()
    let count = 0
    nums1.forEach( num1Item => {
        nums2.forEach( num2Item => {
            let total  = num1Item + num2Item
            if( twoSumMap.has(total)) {
                twoSumMap.set(total, twoSumMap.get(total) + 1)
            } else {
                twoSumMap.set(total, 1)
            }
        })
    })
    nums3.forEach( num3Item => {
        nums4.forEach( num4Item => {
            let total  = num3Item + num4Item
            
            if(total === 0 && twoSumMap.get(0) > 0) {
                count += twoSumMap.get(0)
            }
            if( total !== 0 && twoSumMap.has(-total) > 0) {
                count += twoSumMap.get(-total)
            } 
        })
    })
    return count
    
};