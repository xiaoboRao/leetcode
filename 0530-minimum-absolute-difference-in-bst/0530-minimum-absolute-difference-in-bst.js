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
    let result = Infinity
    let preNode = null
    const dfs = (node) => {
        if(!node) return
        if(node.left){
             dfs(node.left)
        } 
        if(preNode) result = Math.min( Math.abs(node.val - preNode.val), result)
        preNode = node
        if(node.right){
            dfs(node.right)
        }
        return node.val
    }
    dfs(root)
    return result
};