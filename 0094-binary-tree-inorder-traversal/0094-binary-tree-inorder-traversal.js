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
var inorderTraversal = function(root) {
    if(!root) return []
    let result = []
    let cur = root
    let stack = [];
    while(stack.length || cur) {
        // push stack  left => right
        if(cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            // pop stack left => mid => right
              let node = stack.pop()
              result.push(node.val)
              cur = node.right
        }
    }
    return result
};