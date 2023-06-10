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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = null ;
    
    const inOrder = (root) => {
        
        if(!root) return 
        
        inOrder(root.left)
        if(res) {
            return
        }
        
        k--
        
        if(k === 0) {
           res = root.val
            return
        }
         inOrder(root.right)
    }
    inOrder(root)
    
   // return res
    // [3,1,4,null,2], k = 1
    // test(res).toBe(1)
    // [5,3,6,2,4,null,null,1], k = 3
    // test(res).toBe(3)
    return res
};


const test =(result) => {
    return {
        toBe(value) {
            if(result !== value) {
                throw Error(`the result is ${result}, the expected`)
            } else {
                console.log('pass the test')
            }
        }
    }
}