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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let min = -Infinity
  let max = Infinity
  
  const dfs = (root, min, max) => {
      
      if(!root) return true
      
      if(root.val <= min || root.val >= max) return false
      
      let leftReuslt = dfs(root.left, min, root.val)
      let rightResult = dfs(root.right, root.val, max)
      
      return leftReuslt && rightResult
  }
  let result = dfs(root, min,  max)
  return result
  // test(result).toBe(true)
};

const test  = (result) => {
    return {
         toBe(value) {
            if(result !== value) {
                throw Error(`the result is ${result}, the expected value is ${value}`)
            } else {
                console.log("pass the test")
            }
        }
    }
}