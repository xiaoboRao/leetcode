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
    let dumy = new ListNode(0, head)
    
    let prev = dumy
    let curr = head
    
    while(curr) {
        if(curr.next && curr.next.val === curr.val ) {
            while(curr.next && curr.next.val === curr.val) {
                curr = curr.next
            }
            prev.next = curr.next
        } else {
           prev = curr
        }
        curr = curr.next
    }
    return dumy.next
};