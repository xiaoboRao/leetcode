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
 * @param {number} key
 * @return {TreeNode}
 */

 function getMinNode(curNode) {
     while(curNode.left) {
            curNode = curNode.left
        }
        return curNode
 }
var deleteNode = function(root, key) {
    if(!root) return null
    const dfs = (node) => {
        // 1. when key not in the tree
        if(!node) return null
        // when node without left and right nodes
        if(!node.left && !node.right && node.val === key) {
            return null
        } else if(!node.left && node.val === key) {
            // when node just has right node
            return node.right
        } else if(!node.right && node.val === key) {
            // when node just has left node
            return node.left
        } else if(node.val === key) {
            // when node has left and right nodes 
            const targetNode = getMinNode(node.right)
            targetNode.left = node.left
            return node.right
        }
        node.left = dfs(node.left)
        node.right = dfs(node.right)
        return node
    }
    return dfs(root)
};