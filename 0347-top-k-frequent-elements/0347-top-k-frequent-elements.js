/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // key: frequency
    let keysFreq = {}
    nums.forEach((num) => {
        if(!keysFreq[num]) {
            keysFreq[num] = 1
        } else {
             keysFreq[num]++
        }
    })
    // frequency: keys
    let freqKeys = {} 
    let freq
    for( let key in keysFreq) {
        freq = keysFreq[key]
        if(!freqKeys[freq]) {
            freqKeys[freq] = []
        } 
          freqKeys[freq].push(key)
    }
    console.log(freqKeys)
    // sort the frequency
    let sortFreqKeys = Object.keys(freqKeys).sort((a, b) => b - a)
    console.log(sortFreqKeys)

    let result = []
    let resK = 0
    sortFreqKeys.forEach((freq) => {
            freqKeys[freq].forEach((key) => {
                // just need k most frequent elements.
                if(resK < k) {
                    resK++
                   result.push(key)
                }
            })
    })
    return result
};