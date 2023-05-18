/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
   // Create a dummy node to hold the head of the reversed list
  const dummy = new ListNode(0);
  dummy.next = head;
  
  // Create a pointer to the node before the start of the reversed list
  let pre = dummy;
  for (let i = 1; i < left; i++) {
    pre = pre.next;
  }
  
  // Create a pointer to the start of the reversed list
  let start = pre.next;
  
  // Reverse the list from m to n
  for (let i = left; i < right; i++) {
    const next = start.next;
    start.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  
  // Return the head of the list
  return dummy.next;
}