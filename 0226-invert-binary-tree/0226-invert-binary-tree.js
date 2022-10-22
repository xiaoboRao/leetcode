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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root
    let queue = [root]
    
    const treeSwap = (node, left, right) => {
        let temp = left
        left = right
        right = temp
        node.left = left
        node.right = right
    }
    while(queue.length > 0) {
      let length = queue.length
      while(length-- > 0 ) {
        let cur = queue.shift()
        treeSwap(cur, cur.left, cur.right)
        cur.left && queue.push(cur.left)
        cur.right && queue.push(cur.right)
      }
    }
    return root
};