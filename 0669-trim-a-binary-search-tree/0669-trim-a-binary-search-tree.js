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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */

var trimBST = function(root, low, high) {

    let dfs = (root, low, high) => {
        if(!root) return null
        
        if(root.val > high) {
            return dfs(root.left, low, high)
        }
        
        if(root.val < low) {
             return dfs(root.right, low, high)
        }
        
        root.left = dfs(root.left, low, high)
        root.right = dfs(root.right, low, high)
        
        return root
    }
    
    return dfs(root, low, high)
};