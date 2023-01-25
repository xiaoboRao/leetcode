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

function getListLen(head) {
    let len = 0;
    while(head){
        len++;
        head = head.next;
    }
    return len;
}
var getIntersectionNode = function(headA, headB) {
    
    let lenA = getListLen(headA);
    let lenB = getListLen(headB);
    let curA = headA;
    let curB = headB;
    
    if(lenA < lenB) {
        [lenA, lenB] =  [lenB, lenA];
        [curA, curB] =  [curB, curA];
    }
    let minus = lenA - lenB;
    while(minus--) {
        curA = curA.next;
    }
    // note: compare their address and value, not only just value
    while(curA && curA !== curB) {
            curA = curA.next; 
            curB = curB.next;
    }
    return curA;
};