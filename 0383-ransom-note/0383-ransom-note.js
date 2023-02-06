/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let map = new Map()
  
  for(let i = 0; i < magazine.length; i++) {
      if(map.has(magazine[i])) {
          map.set(magazine[i], map.get(magazine[i]) + 1 )
      } else {
          map.set(magazine[i], 1 )
      }
  }
  for(let i = 0; i < ransomNote.length; i++) {
      if(map.get(ransomNote[i]) > 0) {
          map.set(ransomNote[i], map.get(ransomNote[i]) - 1 )
      } else {
          return false
      }
  }
    return true
};