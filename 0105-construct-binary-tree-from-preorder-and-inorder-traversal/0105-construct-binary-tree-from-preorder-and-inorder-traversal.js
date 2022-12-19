/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0) return null
    let midValue = preorder.shift()
    let index = inorder.indexOf(midValue)
    let leftNodesArr = inorder.slice(0, index)
    let rightNodesArr = inorder.slice(index + 1)
    let midNode = new TreeNode(midValue)
    midNode.left = buildTree(preorder.slice(0, index), leftNodesArr)
    midNode.right = buildTree(preorder.slice(index), rightNodesArr)
    return midNode
};