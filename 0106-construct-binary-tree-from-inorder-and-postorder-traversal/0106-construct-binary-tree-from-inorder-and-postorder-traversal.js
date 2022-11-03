/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    
    if(!postorder.length) return null       // recursion ends situation
    
    let rootNodeValue = postorder.pop()     // postorder last element is the rootNode
    
    let rootIndex = inorder.indexOf(rootNodeValue)  // find the rootNode in the inorder, so can confirm the left and right elements array
    
    
    let rootNode = new TreeNode(rootNodeValue)
    
    rootNode.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex))   // slice the left nodes in the inorder and postorder
    rootNode.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex))   // slice the right nodes in the inorder and postorder
    
    return rootNode
};