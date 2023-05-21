/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head
    let fast = head.next
    
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    let prev = null
    let curr = slow.next;
    slow.next = null;
    
    while(curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp  
    }
    let first = head
    let second = prev
    while(second) {
        let firstNext = first.next
        let secondNext = second.next
        first.next = second
        second.next = firstNext
        first = firstNext
        second = secondNext
    }
};