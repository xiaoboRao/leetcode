/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
 
    if(preorder.length === 0) return null
    
    let val = preorder.shift()
    
    let index = inorder.indexOf(val)
    
    let leftArray = inorder.slice(0, index)
    let rightArray = inorder.slice(index + 1)
    
    let node = new TreeNode(val)
    
    // because the preorder array shift one element, so current right subtree start from index 0
    node.left = buildTree(preorder.slice(0, index), leftArray)
    node.right = buildTree(preorder.slice( index ), rightArray)
    return node
};