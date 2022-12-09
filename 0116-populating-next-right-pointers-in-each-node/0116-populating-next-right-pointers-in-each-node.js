/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    
    if(!root) return root
    
    let queue = [root]
    
    while(queue.length) {
        let len = queue.length
        let levelArr = []
        while(len--) {
          let cur = queue.shift()
          cur.left && queue.push(cur.left)
          cur.right && queue.push(cur.right)
          levelArr.push(cur)
        }
        
        for(let i = 1; i < levelArr.length; i++) {
            levelArr[i - 1].next = levelArr[i]
        }
        levelArr[levelArr.length - 1].next = null
        
    }
    return root
};