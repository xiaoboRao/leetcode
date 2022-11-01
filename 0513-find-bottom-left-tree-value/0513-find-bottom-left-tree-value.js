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
var findBottomLeftValue = function(root) {
    if(!root) return root
    let queue = [root]
    let targetNode = root
    
    while(queue.length) {
        let length =  queue.length 
        targetNode = queue[0]       // each level's first element is the  leftmost value, so just iterator tree until the last row
        while(length--) {
            let curNode = queue.shift()
            curNode.left && queue.push(curNode.left)
            curNode.right && queue.push(curNode.right)
        }
    }
    
    return targetNode.val
};