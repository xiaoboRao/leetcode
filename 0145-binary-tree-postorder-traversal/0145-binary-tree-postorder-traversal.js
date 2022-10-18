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
var postorderTraversal = function(root) {
    // it is preorder traversal, just reverse it
    if(!root) return []
    let result = []
    // push stack left => right pop stack right => left
    // result mid => right => left
    // at the end just reverse the result array
    let stack = [root]
    while(stack.length) {
       let node  = stack.pop()
            result.push(node.val);
            node.left && stack.push(node.left)
            node.right && stack.push(node.right) 
    }
    return result.reverse()
};