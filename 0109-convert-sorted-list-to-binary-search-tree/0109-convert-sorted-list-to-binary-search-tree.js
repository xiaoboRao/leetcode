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
    while(head) {
        btsArr.push(head.val)
        head = head.next
    }
    return constructBST(btsArr, 0 , btsArr.length - 1)
    
};

const constructBST = (btsArr, start, end) => {
    if(start > end) return null
    
    let midIndex = Math.floor(( start + end )/2)
    let nodeValue = btsArr[midIndex]
    let root = new TreeNode(nodeValue)
    root.left = constructBST(btsArr, start, midIndex - 1)
    root.right = constructBST(btsArr, midIndex + 1, end)
    
    return root
    
}