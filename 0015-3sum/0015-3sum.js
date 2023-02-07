/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort( (a, b) => a - b)
    console.log(nums)
    let result = []
    
    let end = nums.length
    
    for(let i = 0 ; i < end; i++) {
        if(nums[i] > 0) return result
        let left = i + 1
        let right = end - 1
        if(i > 0 && nums[i] === nums[i - 1]) continue
        while(left < right) {
            let leftNum = nums[left]
            let rightNum = nums[right]
            let iNum = nums[i]
            if(leftNum + rightNum + iNum > 0)  {
                right--
            } else if(leftNum + rightNum + iNum < 0)  {
                left++
            } else {
                result.push([leftNum, rightNum, iNum ])
                while(left < right && nums[left] == nums[left + 1]){
                    left++
                }
                while(left < right && nums[right] == nums[right - 1]){
                    right--
                }
                left++
                right--
            }
        }   
    }
    
    return result
};