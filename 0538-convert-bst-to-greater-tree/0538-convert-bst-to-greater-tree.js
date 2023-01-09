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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let totalCount = 0     // collect the total count of current node
    
    const dfs = (node) => {
        if(!node) return null
        
        node.right = dfs(node.right)
        totalCount += node.val
        let newNode = new TreeNode(totalCount)
        newNode.right = node.right
        node.left = dfs(node.left)
        newNode.left = node.left
        return newNode
    }
    return dfs(root)
};