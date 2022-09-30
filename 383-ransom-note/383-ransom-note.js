/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
         const noteMap = new Map()

    for(const letter of magazine) {
        noteMap.set(letter, (noteMap.get(letter) || 0) +1 )
    }
    for(const letter of ransomNote) {
        if(!noteMap.get(letter)) {
            return false
        }
        noteMap.set(letter, noteMap.get(letter)  - 1 )
    }
    return true
};