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
var insertionSortList = function(head) {
     // Step 1: Create a dummy node to serve as the head of the sorted list
    let dumy = new ListNode(0, head);
    
    let pre = head
    let curr  = head.next
    
    while(curr) {
        // compare with  the previous node, 
        // if the current node value is greater than previous node val,just advance
        // the pointer, go to the next iteration
        // else, need to  loop  start with head node  to find the correct location
        
        if(curr.val > pre.val) {
            curr = curr.next
            pre = pre.next
            continue
        }
        
        // define a temporary node 
        let temp = dumy
        // find the last node which's value in less than the current node value
        // in a while loop
        while(curr.val > temp.next.val) {
            temp = temp.next
        }
        // save the temp next node which is first node value is greater then current node value
        let tempNext =  temp.next
        // save the curr next node
        let currNext = curr.next
        // set currNext node as the previous node next node
         pre.next = currNext
        // set curr node as the previous node temp node
        temp.next = curr
        // set tempNext node as the previous node curr node
        curr.next = tempNext
        
        // advance the curr pointer, move to the next iteration
        curr = pre.next
        
    }

    //  Return the sorted list
    return dumy.next;
}