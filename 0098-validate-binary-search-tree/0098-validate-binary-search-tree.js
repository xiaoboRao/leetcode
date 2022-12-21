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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let maxVal = -Infinity
    const dfs = (node) => {
        if(!node) return true
        let leftResult = dfs(node.left)
        if(node.val > maxVal) {
            maxVal = node.val
        } else {
            return false
        }
        let rightResult = dfs(node.right)
        
        return leftResult && rightResult
    }
   
    return dfs(root)
};