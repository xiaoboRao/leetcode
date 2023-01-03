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
    
    const dfs =(node) => {
        if(!node) return null
        if((node.val > p.val || node.val === p.val) && (node.val < q.val || node.val === q.val)) return node
        if((node.val < p.val || node.val === p.val) && (node.val > q.val || node.val === q.val)) return node
        let leftNode, rightNode
        
        leftNode = dfs(node.left)
        rightNode = dfs(node.right)
        if(leftNode) return leftNode
        if(rightNode) return rightNode
        return null
    }
    return dfs(root)
};