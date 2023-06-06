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
 * @return {number}
 */
var goodNodes = function(root) {
    
    let max = - Infinity
    
    let count = 0
    
    const dfs = (root, max) => {
    
        if(!root) return count

        if(root.val >= max ) {
            max = root.val 
            count++
        }

        dfs(root.left, max)
        dfs(root.right, max)
    }
    
    dfs(root, max)
    return count
    // test(count).toBe(1)
    
};

const test = (result) => {
    return {
        toBe(value) {
            if(result !== value) {
                throw Error(`the result is ${result}, expected value is ${value}`)
            } else {
                console.log('pass the test')
            }
        }
    }
}

