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
var deleteDuplicates = function(head) {
    let curr = head
    let prev = head
    while(curr) {
        if(curr.next && curr.val === curr.next.val) {
            while(curr.next && curr.val === curr.next.val) {
                curr = curr.next
            }
            prev.next = curr.next
        } 
        prev = curr.next
        curr = curr.next
    }
    
    return head
};