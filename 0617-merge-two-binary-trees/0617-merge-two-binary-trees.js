/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    const dfs = (root1, root2) => {
        if(!root1 && !root2 ) return null
        let newNode = null
        if(!root1 && root2 ) {
            newNode =  new TreeNode(root2.val)
            newNode.left = dfs(null, root2.left)
            newNode.right = dfs(null, root2.right)
        }
        if(root1 && !root2 ) {
            newNode =  new TreeNode(root1.val)
            newNode.left = dfs(root1.left, null)
            newNode.right = dfs(root1.right, null)
        } 
        if(root1 && root2){
            newNode =  new TreeNode(root1.val + root2.val)
            newNode.left = dfs(root1.left, root2.left)
            newNode.right = dfs(root1.right, root2.right)
        }
        
        return newNode  
    }

    return dfs(root1, root2)
    
};