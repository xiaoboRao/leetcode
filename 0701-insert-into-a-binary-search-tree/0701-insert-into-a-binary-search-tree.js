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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val)
    
    const dfs = (node) => {
        if(!node) return new TreeNode(val)
        let leftNode, rightNode
        
        if(node.val > val) {
            leftNode = dfs(node.left)
        }
        if(node.val < val ) {
            rightNode = dfs(node.right)
        }
        
        if(leftNode) node.left = leftNode
        if(rightNode) node.right = rightNode
        return node 
    }
    dfs(root)
    return root
};