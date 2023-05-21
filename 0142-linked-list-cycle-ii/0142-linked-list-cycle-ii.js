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
   let mySet = new Set()
      while (head !== null) {
          // only when address in the memory is same
          // it is the node where cycle begins
        if (mySet.has(head)) {
          return head
        } else {
          mySet.add(head)
        }
        head = head.next
      }
      return head
    }