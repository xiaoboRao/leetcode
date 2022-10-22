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
var averageOfLevels = function(root) {
    if(!root)  return []
    let result = []
    let stack = [root]

    while(stack.length > 0) {
        let length = stack.length
        let curCount = stack.length
        let curTotal = 0
        while(length-- > 0) {
            let cur = stack.shift()
            curTotal += cur.val
            cur.left && stack.push(cur.left)
            cur.right && stack.push(cur.right)
        }
        result.push(curTotal/curCount)
    }
    return result
};