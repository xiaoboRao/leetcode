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
var sumOfLeftLeaves = function(root) {
    let queue = [root]
    
    let sum = 0
    
    while(queue.length) {
        let length = queue.length
        
        while(length--) {
            let node = queue.shift()
            if(node.left && !node.left.left && !node.left.right) {
                sum += node.left.val
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        
    }
    
    return sum

};