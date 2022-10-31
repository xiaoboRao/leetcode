/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    const traversal = (leftNode, rightNode) => {
        
        if(!leftNode && rightNode) return false
        if(!rightNode && leftNode) return false
        if(!rightNode && !leftNode) return true
        if(rightNode.val !== leftNode.val) return false
        
        let outSide = traversal(leftNode.left, rightNode.left)
        let inSide = traversal(leftNode.right, rightNode.right)
        
        return outSide && inSide
    }
    return traversal(p, q)
};