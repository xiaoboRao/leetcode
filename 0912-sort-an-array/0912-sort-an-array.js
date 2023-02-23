/**
 * @param {number[]} nums
 * @return {number[]}
 */


var sortArray = function(nums) {
   if(nums.length === 1) return nums
    return quickSort(nums, 0, nums.length - 1)
};

function  quickSort(arr, start, end) {
    if(start>=end) return 
    pivotIndex = partition(arr,start,end)
    quickSort( arr, start, pivotIndex  - 1)
    quickSort( arr, pivotIndex + 1, end)
    return arr
}

function partition(arr, start, end) {
    let pivotValue = arr[end]
    let pivotIndex = start
    
    for(let i = start; i <= end; i++) {
        if(arr[i] < pivotValue) {
            swap(arr, i, pivotIndex)
            pivotIndex++
        }
    }
    
    
    swap(arr, pivotIndex, end)
    return pivotIndex
}

function swap(arr, a, b) {
    let temp = arr[b]
    arr[b] = arr[a]
    arr[a] = temp
}