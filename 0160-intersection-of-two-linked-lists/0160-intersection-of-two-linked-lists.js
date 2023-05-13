/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function getNodeLength(node) {
    let length = 0
    while(node) {
        node = node.next
        length++
    }
    return length
}

var getIntersectionNode = function(headA, headB) {
    // get the lengths of headA and headB LinkedListds
    let lengthA = getNodeLength(headA)
    let lengthB = getNodeLength(headB)
    // caculate the didderence
    let didderence = Math.abs(lengthA - lengthB) 
    // swap the headA and headB, set the headA is the longer one
    if(lengthA < lengthB) {
        [headA, headB] = [headB, headA]
    }
     // move head pointer ,so that can compare with the listA from head to tail
    while(didderence--) {
        headA = headA.next
    }
    // iterate through the listA, find the same node that the memory is same
    while(headA) {
        if(headA === headB) return headA
        headA = headA.next
        headB = headB.next
    }
};