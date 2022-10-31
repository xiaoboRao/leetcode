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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    // compare part of root tree  is same with subRoot tree
    const compare = (root, subRoot) => {
        if(!root && !subRoot) return true
        if(!root || !subRoot) return false
        return (root.val === subRoot.val) && compare(root.left, subRoot.left) && compare(root.right, subRoot.right)
    }
    
    if(!root && !subRoot) return true
    if(!root || !subRoot) return false
    // in a recursion, just form root -> left find the subTree is same with subRoot tree
    let result = (root.val === subRoot.val) && compare(root, subRoot)
    return result || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)

};
