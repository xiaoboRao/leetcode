/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    let result = []
    while(queue.length) {
        let len = queue.length
       let levelArr = []
      while(len--) {
        let cur = queue.shift()
        levelArr.push(cur.val)
        for(const item of cur.children) {
           queue.push(item)
        }
       }
      result.push(levelArr) 
    }
    return result;
};