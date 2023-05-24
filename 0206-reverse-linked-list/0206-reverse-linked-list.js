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
    
    let pre = null
    let curr = head
    
    while(curr) {
       let temp = curr.next
        curr.next = pre
        pre = curr
        curr = temp
    }
    return pre
    
};