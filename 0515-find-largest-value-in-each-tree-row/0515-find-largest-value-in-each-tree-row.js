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
var largestValues = function(root) {
    if(!root) return []
    let queue = [root]
    let result = []
    while(queue.length) {
        let len = queue.length
        let max = -Infinity
        while(len--) {
            let cur = queue.shift()
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
            
            cur.val > max ? max = cur.val : ''
        }
        
        result.push(max)
    }
    
    return result
};