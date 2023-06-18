/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {    
    // pre, curr to keep track of the current and previous node value
    // to get the minimum difference
    let prev = null
    let minDifference = Infinity
    const inorder = (root) => {
        
        if(!root) return 
        
        inorder(root.left)
        
        if(prev) {
            minDifference = Math.min( Math.abs(prev.val - root.val), minDifference)
        }
        prev = root
        inorder(root.right)
    }
    inorder(root)
    return minDifference
    
};