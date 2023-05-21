/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head
    let index = 0
    // iterate the list
    while(fast && fast.next) {
            fast = fast.next.next
            slow = slow.next
            // find some node that slow and fast meets, means there is cycle in the list
            if(fast === slow) {
                // move the one of pointers to the head
                let slow = head
                // move both pointers a step at a time again
                while(slow !== fast) {
                    slow = slow.next
                    fast = fast.next
                }
                // return the node that they meet, also is the cycle begins
                return slow  
            }
    }
    // means no cycle in the list
    return null
};