/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
     nums.sort( (a, b) => a - b)
    let result = []
    for( let i = 0; i< nums.length; i++ ) {
        let right = nums.length - 1
        let left = i + 1
        let currentNum = nums[i]

        // when the min num is greater than 0 , so the result must greater than 0 
        if(currentNum > 0) return result
        // remove  the dumplicate num , think wht num[i - 1] not num[i]
        if( currentNum  == nums[i - 1]) continue
        // keep the i posion move the left and right position, utill left = right
        while(left < right) {
            let threeNum = nums[i] + nums[left] + nums[right]

            if( threeNum < 0) {
                left++
            } else if (threeNum === 0) {
                result.push([nums[i], nums[left], nums[right]])

                while( left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                while( left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                left++
                right--

            } else  {
                right--
            }
        }
    }
    return result
};