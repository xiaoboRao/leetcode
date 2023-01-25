/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dumyHead = new ListNode(0, head)
    let fastPoint = dumyHead, slowPoint = dumyHead
    
    while(n-- >= 0) {
        fastPoint = fastPoint.next
    }
    while(fastPoint) {
        slowPoint = slowPoint.next
        fastPoint = fastPoint.next
    }
    slowPoint.next = slowPoint.next ? slowPoint.next.next : null
    return dumyHead.next
};