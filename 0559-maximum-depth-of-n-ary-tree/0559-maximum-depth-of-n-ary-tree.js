/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0
    }
    let queue = [root]
    let count = 0
    while(queue.length) {
        count++
        let length = queue.length
        
        while(length--) {
            let node = queue.shift()
            for(let item of node.children) {
                queue.push(item)
            }
        }
    }
    
    return count
};