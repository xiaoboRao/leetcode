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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false
    
    const dfs = (node, restCount) => {
        console.log(node, restCount)
        if( !node.right && !node.left &&  restCount === 0) return true
        if(!node.right && !node.left ) return false
        
        let leftResult = !!node.left && dfs(node.left , restCount - node.left.val)
        let rightResult = !!node.right && dfs(node.right , restCount - node.right.val)
        return  leftResult || rightResult
    }
    
    return dfs(root, targetSum - root.val)
};