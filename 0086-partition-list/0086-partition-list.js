/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let smallDumy = new ListNode(0)
    let largerDumy = new ListNode(0)
    let smallerCurr = smallDumy
    let largerCurr = largerDumy
    while(head) {
        // create new node, add to smaller list or larger list
        let newNode = new ListNode(head.val) 
        if(head.val >= x) {
            largerCurr.next = newNode
            largerCurr = largerCurr.next 
        } else {
            smallerCurr.next = newNode
            smallerCurr = smallerCurr.next
        }
        head = head.next   
    }
    // conbine the smaller and larger lists
    // just append the head of the larger list to the last node of the smaller list
    smallerCurr.next = largerDumy.next
    return smallDumy.next
};