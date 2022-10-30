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
 * @return {number}
 */
var countNodes = function(root) {
    if(!root) return 0
    let queue = [root]
    let nodeCounts = 0
    while(queue.length) {
        let length = queue.length
        nodeCounts+= length
        while(length--) {
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)

        }
    }
    return nodeCounts
};