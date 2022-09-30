/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length < nums2.length) {
        let temp = null;
        temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    // remove the dumplicate element
    const numsSet1 = new Set(nums1);

    // the element of result must be unique
    const resultSet = new Set();

    for(let i = 0; i < nums2.length; i++) {
        numsSet1.has(nums2[i]) && resultSet.add(nums2[i])
    }

    return Array.from(resultSet)
};