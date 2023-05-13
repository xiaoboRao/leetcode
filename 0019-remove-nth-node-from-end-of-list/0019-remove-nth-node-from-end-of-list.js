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
   
    let current = head
   let length = 0
   // iterrate through the list to get the length of linkedList
   while(current) {
       length++
       current = current.next
   }
    current = head
    if(length === n)  {
        head = head.next            // remove the head node
    } else {
        // find the target node that is prior to the removed node
        for(let i = 0; i < length - n - 1 ; i++) {
            current = current = current.next
        } 
        current.next = current.next.next  
    }
    
    return head
};