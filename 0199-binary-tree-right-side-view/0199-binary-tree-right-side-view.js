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
var rightSideView = function(root) {
    if(!root) return []
    let result = []
    let stack = [root]
    while(stack.length > 0) {
        let length = stack.length
        let curLevel = []
        while(length-- > 0) {
            let cur = stack.shift()
            // just need the most right side node, so get the last element which is what we want
            if(length === 0) {
                curLevel.push(cur.val)
            }
            cur.left && stack.push(cur.left)
            cur.right && stack.push(cur.right)
        }
        result.push(curLevel[0])
    }
    return result
};