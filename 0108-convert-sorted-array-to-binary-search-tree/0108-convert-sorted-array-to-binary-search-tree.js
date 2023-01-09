/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    const dfs = (nums, start, end) => {
        if(start === end) return new TreeNode(nums[start]) 
        if(start > end ) return null
        
        let mid = Math.ceil((start + end)/2)
        let newNode = new TreeNode(nums[mid])
        newNode.left = dfs(nums, start, mid - 1)
        newNode.right = dfs(nums, mid + 1, end)
        return newNode
    }
    
    return dfs(nums, 0, nums.length - 1)
};