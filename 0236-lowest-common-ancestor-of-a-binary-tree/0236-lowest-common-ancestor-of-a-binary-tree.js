/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    const postorder = (node, p, q) => {
        if(!node || node === p || node === q) return node
        const leftNode =  postorder(node.left, p, q)
        
        const rightNode =  postorder(node.right, p, q)
        
        if(leftNode && rightNode) {
            return node
        }
        if(!leftNode) {
            return rightNode
        }
        return leftNode
        
    }
    return postorder(root, p, q)
};