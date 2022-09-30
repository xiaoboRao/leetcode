/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(" ")
        console.log(sArr)

   let newArr = []
   
   for(let i = sArr.length - 1 ; i>= 0 ; i--) {
       if(sArr[i].length > 0) {
           newArr.push(sArr[i])
       }
   }
    return newArr.join(" ")
};