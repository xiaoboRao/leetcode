/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let btsArr = []
    // traverse the list, push the elements to the array
    while(head) {
        btsArr.push(head.val)
        head = head.next
    }
    // calll constructBST function to build the entire bst 
    return constructBST(btsArr, 0 , btsArr.length - 1)
    
};
    // write the helper function to construct the BST from Array
const constructBST = (btsArr, start, end) => {
    // determine the recursive function ends situation
    if(start > end) return null
    // calculate the middle elemens of the array
    let midIndex = Math.floor(( start + end )/2)
    let nodeValue = btsArr[midIndex]
    // build the Tree node  from the middle elements
    let root = new TreeNode(nodeValue)
    // build the left Tree node left subTrees recursively
    root.left = constructBST(btsArr, start, midIndex - 1)
        // build the right Tree node left subTrees recursively

    root.right = constructBST(btsArr, midIndex + 1, end)
    
    // return the Tree node
    return root
    
}