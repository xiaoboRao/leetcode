/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort( (a, b) => a - b)
    
    let result = []
    for(let i = 0; i< nums.length; i++ ) {
        if(i > 0 && nums[i] === nums[i - 1]) continue
        for(let j = i + 1; j < nums.length; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) continue
            
            let movePoint = j + 1
            let endPoint = nums.length - 1
            while(movePoint < endPoint ) {
                let moveElement = nums[movePoint]
                let endElement = nums[endPoint]
                let sum = nums[i] + nums[j] + moveElement + endElement
                if(sum < target) {
                    movePoint++
                } else if (sum === target) {
                    result.push([nums[i], nums[j], moveElement, endElement])
                    movePoint++
                    while(nums[movePoint] === moveElement) {
                        movePoint++
                    }
                } else {
                    endPoint--
                }
            }
        }
    }
    return result
};