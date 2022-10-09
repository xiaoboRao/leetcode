/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
        j = 0
    
    nums.forEach((num) => {
        if(num !== val) {
            nums[i++] = nums[j++]
        } else {
            j++
        }
    })
    return i;
};