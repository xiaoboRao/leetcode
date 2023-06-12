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
    
   const dfs = (nums) => {
       
       if(nums.length === 0) return null
       let index = Math.floor(nums.length / 2)
       let val = nums[index]
       
       let leftNums = nums.slice(0, index)
       let rightNums = nums.slice(index + 1, nums.length)
       let node = new TreeNode(val)
       
       node.left = dfs(leftNums)
       node.right = dfs(rightNums)
        
       return node
   }
    
    return dfs(nums)
};
