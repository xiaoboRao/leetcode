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
    
    let lengthA = getNodeLength(headA)
    let lengthB = getNodeLength(headB)
    
    
    // let headA is always the longer node
    if(lengthA < lengthB) {
        [headA, headB] = [headB, headA]
    }
    
    let minus = Math.abs(lengthA - lengthB)
    while(minus--) {
        headA = headA.next
    }
    
    
    while( headA  && headA !== headB) {
        headA = headA.next
        headB = headB.next
    }
    
    return headA
   
};