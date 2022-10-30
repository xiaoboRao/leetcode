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
var minDepth = function(root) {
    if(!root) {
        return 0
    }
    let queue = [root] 
    let depth = 0
    while(queue.length) {
        depth++
        let length = queue.length
        while(length--) {
            let node = queue.shift()
            if(!node.left && !node.right) return depth  // when a node wihtout children, just return the depth
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
};