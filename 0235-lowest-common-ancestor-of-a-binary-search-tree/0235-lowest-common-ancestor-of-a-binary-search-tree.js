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
    // determine the q.val is greater the p.val
    if(q.val < p.val) {
        let temp = q
        q = p
        p = temp
        
    }
    
    const dfs = (root, p, q) => {
        if(!root) return null
        if(p.val <=  root.val  &&  root.val <= q.val)  return root
        let leftNode = dfs(root.left, p, q)
        let rightNode = dfs(root.right, p, q)
        
        if(leftNode) return leftNode
        if(rightNode) return rightNode
        return null

    }
    return dfs(root, p, q)
};