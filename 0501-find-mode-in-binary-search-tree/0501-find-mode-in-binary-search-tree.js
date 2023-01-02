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
 * @return {number[]}
 */


var findMode = function(root) {
    let preNode = null
    let count = 1
    let result = 1
    let targetNodeArr = []
    const dfs = (node) => {
        if(!node) return
        
        node.left && dfs(node.left)
        
        if(preNode && node.val === preNode.val) {
                count++ 
        } else {
            count = 1
        }
        if(count > result) {
            targetNodeArr = []
            targetNodeArr.push(node.val)
            result = count
         } else if(count === result) {
            targetNodeArr.push(node.val)
         }
        preNode = node
        node.right && dfs(node.right) 
    }
    dfs(root)
    return targetNodeArr
};