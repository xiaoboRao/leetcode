/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    console.log(nums)
    let result = 0
    nums.forEach( (num, index) => {
        // leave  the last element, deal with it finally
        if(index < nums.length - 1) {
        // deal with the element less than 0            
        if(num < 0) {
            
            if(k > 0) {
               result += -num
                k--
            } else {
                result += num
            }
            
        } else {
            result +=num
        }
      }

    })
    let minNum = nums[nums.length - 1]
    while(k > 0) {
        minNum = -minNum
        k--
    }
  return  result  + minNum
};