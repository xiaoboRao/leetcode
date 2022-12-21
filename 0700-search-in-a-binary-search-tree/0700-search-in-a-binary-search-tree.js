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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    
  const dfs = (node, val) => {
      
      if(node && node.val === val) return node
      
      if(!node) return null
      
      let leftNode = dfs(node.left, val)
      let rightNode =  dfs(node.right, val)
      return leftNode || rightNode
  }

    return dfs(root, val)
};