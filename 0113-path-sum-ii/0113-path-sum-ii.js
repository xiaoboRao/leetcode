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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if(!root) return []

    let result = []
    
    const dfs = (node, restCount, pathArr) => {
        
        if(!node.right && !node.left && restCount === 0) {
            pathArr.push(node.val)
            result.push([...pathArr])
        }
        if(!node.right && !node.left) return
        pathArr.push(node.val)
        node.left && dfs(node.left, restCount - node.left.val, [...pathArr])
        node.right && dfs(node.right, restCount - node.right.val, [...pathArr])
    }
    
    dfs(root, targetSum - root.val, [])
    
    return result
};