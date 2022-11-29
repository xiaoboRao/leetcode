/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
   let result = []
   let partResult = []
   
   const backTracking = (path, startIndex) => {
       if(path.length == k) {
           result.push([...path])
           return
       }
          for(let i = startIndex; i<= n; i++) {
           partResult.push(i)
           backTracking(partResult, i + 1 )
           partResult.pop()
       } 
   }
   backTracking(partResult, 1)
   return result
};