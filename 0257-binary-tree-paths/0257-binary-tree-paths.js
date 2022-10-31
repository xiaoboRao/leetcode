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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) return []
    let result = []
    let path = ''
    
    const getPath = (curNode, path) => {
        if(!curNode.left && !curNode.right) {
            path +=  curNode.val
            result.push(path)
        }
        path += curNode.val + '->'
        curNode.left && getPath(curNode.left, path)
        curNode.right && getPath(curNode.right, path)
    }
    getPath(root, '')
    return result
};