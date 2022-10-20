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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res=[],queue=[]
    queue.push(root)
    if(root===null){
        return res
    }
    while(queue.length!==0){
        let length=queue.length
        let curLevel=[]
        for(let i=0;i<length;i++){
            let node=queue.shift()
            // collect every level node
            curLevel.push(node.val)
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
        }
        // push in to res array
        res.push(curLevel)
    }
    return res
};