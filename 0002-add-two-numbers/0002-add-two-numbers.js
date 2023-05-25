/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
 
        let dumy = new ListNode(0)
        let curr = dumy
        let carry = 0
        
        while(l1 || l2) {
            if(!l1) l1 = new ListNode(0)
            if(!l2) l2 = new ListNode(0)

            let sum = l1.val + l2.val + carry
            curr.next =new ListNode(sum % 10)
            
            if(sum >= 10) {
                carry = 1
            } else {
                carry = 0
            }
            
            l1 = l1.next
            l2 = l2.next
            curr = curr.next
        }
    
    if(carry > 0) {
        curr.next = new ListNode(carry)
    }
       
    return dumy.next
   
};