/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort( (a, b) => a - b)
    let result = []
    
    for(let i = 0; i < nums.length; i++) {
        
        if(nums[0] > 0) return []
        
        if( i > 0 && nums[i] === nums[i - 1]) continue
        
        let movePoint = i + 1
        let end = nums.length - 1
        while(movePoint < end) {
            
            let moveElement =  nums[movePoint]
            let lastElement = nums[end]
            let sum = nums[i] + moveElement + lastElement
            
            if(sum > 0) {
                end--
            }
            if(sum === 0)   {
               result.push([nums[i], moveElement, lastElement]) 
                movePoint++ 
                while(nums[movePoint] === nums[movePoint - 1]) {
                    movePoint++
                }
                
            } 
            if(sum < 0) {
                movePoint++
            }
        }
    }
    
    return result
};