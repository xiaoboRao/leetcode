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
    
    if(!l1 && !l2) return null
    if(!l1) return addTwoNumbers(new ListNode(0), l2)
    if(!l2) return addTwoNumbers(l1, new ListNode(0))
    
    
    let sum = l1.val + l2.val
    l1.val = sum % 10
    let bonus = parseInt(sum/10) 
    if(bonus > 0) {
        if(l1.next) {
            l1.next.val += 1
        } else {
            l1.next = new ListNode(1)
        }
    }
    
    l1.next = addTwoNumbers(l1.next, l2.next)
    return l1
};