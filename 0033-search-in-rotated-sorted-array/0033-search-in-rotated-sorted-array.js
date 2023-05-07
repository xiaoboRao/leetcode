/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let left = 0
    let right = nums.length - 1
    
    while(left <= right) {
        
        let mid = Math.floor((left + right)/2)
        if( nums[mid] === target) return mid
        
        // If the left half of the array is sorted
        if(nums[left] <= nums[mid] ) {
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid +1
            }
        } 
        // If the right half of the array is sorted
        else {
            if(nums[right] >= target && target > nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } 
    }
    
    return -1
};
