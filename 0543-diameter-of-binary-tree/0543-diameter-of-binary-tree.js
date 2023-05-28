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


var diameterOfBinaryTree = function(root) {
    let diameter = 0
    const dfs = (root) => {
        if(!root) return 0
        let leftHeight = dfs(root.left) 
        let rightHeight = dfs(root.right) 
        diameter = Math.max(diameter, leftHeight + rightHeight)
        return Math.max(leftHeight, rightHeight) + 1
    }
    
    dfs(root)
    return diameter
};