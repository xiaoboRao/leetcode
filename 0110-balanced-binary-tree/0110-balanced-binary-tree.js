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
 * @return {boolean}
 */
var isBalanced = function(root) {
     
    function getHeight(node) {
        
        if(!node) return 0      // the condition that ends the cursion
        
        let leftHeight = getHeight(node.left)   // get the left node leaf height
        
        if(leftHeight === -1) return -1
        
        let rightHeight = getHeight(node.right) // get the right node leaf height
        
        if(rightHeight === -1) return -1
        
        
        if(Math.abs(leftHeight - rightHeight) > 1) {    // if the height difference between left and right more than 1 return -1
            return -1
        } else {
            return Math.max(leftHeight , rightHeight) + 1   // count the current node's height
        }
    }
    
    return !(getHeight(root) === -1) 
};