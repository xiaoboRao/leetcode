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
 * @param {number} key
 * @return {TreeNode}
 */


var deleteNode = function(root, key) {
    
    const dfs = (root, key) => {
        if(!root) return null
        
        if(root.val < key )  {
            root.right = dfs(root.right, key)
        } else if(root.val > key) {
            root.left = dfs(root.left, key) 
        } else  {
            if(!root.right) return root.left
            if(!root.left) return root.right
            let val =  findMinNodeValue(root.right)
            root.val = val
            root.right = dfs(root.right, val)
            
        }
        return root
    }
    
    return dfs(root, key)
 
};

const findMinNodeValue = (node) => {
    while(node.left) {
        node = node.left
    }
    return node.val
}