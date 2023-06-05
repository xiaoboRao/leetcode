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
  let {node1, node2} =swapNode(p, q)
  let lcaNode =  dfs(root, node1, node2)
  return lcaNode
  // expect(lcaNode.val).toBe(4)
// expect(lcaNode.val).toBe(6)

};

const dfs = (root, p, q) => {
    if(!root) return null
    if(root.val >= p.val && root.val <= q.val) return root
    
    let leftNode =  dfs(root.left, p, q)
    let rightNode = dfs(root.right, p, q)
    
    if(leftNode) return leftNode
    if(rightNode) return rightNode
    
    return null
}
// swap the node to promise the node1.val is less than node2.val
const swapNode = (node1, node2) => {
    if(node1.val > node2. val) {
        let temp = node2
        node2 = node1
        node1 = temp
    }
    
    return {node1, node2}
}
// test for result
const expect  = (result) => {
    return {
          toBe(value) {
            if(value !== result) {
                throw Error(`the result is ${result}, and expected ${value}`)
            } else {
                console.log('pass the test')
            }
        }
    }
}