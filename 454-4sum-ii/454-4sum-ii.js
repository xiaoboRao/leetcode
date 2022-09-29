/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
      const twoSumMap = new Map()
    let count = 0;
    for(const n1 of nums1) {
        for(const n2 of nums2) {
            let twoSum = n1 + n2
            // calculate the nums of twoSum
            twoSumMap.set(twoSum, (twoSumMap.get(twoSum) || 0) + 1)
        }
    }
    for(const n3 of nums3) {
        for(const n4 of nums4) {
            let twoSum = n3 + n4
           count += twoSumMap.get(0 - twoSum) || 0
        }
    }
    return count
};