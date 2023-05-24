/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    return recursive(head, null)
};

const recursive = (curr, pre) => {
    if(!curr) return pre
    
    let temp = curr.next
    curr.next = pre
    pre = curr
    curr = temp
    return recursive(curr, pre)
}
