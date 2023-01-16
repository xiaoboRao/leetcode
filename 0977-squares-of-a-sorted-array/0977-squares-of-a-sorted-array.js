/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let resultArr = []
    let endIndex = nums.length - 1
    let startIndex = 0
    
    while(endIndex >= startIndex) {
        let startNum = nums[startIndex]
        let endNum = nums[endIndex]

        if(startNum * startNum >= endNum * endNum) {
            resultArr.unshift(startNum * startNum)
            startIndex++
        } else {
             resultArr.unshift(endNum * endNum)
                endIndex--
        }
    }
    return resultArr
};