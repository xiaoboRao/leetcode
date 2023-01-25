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
var swapPairs = function(head) {
    let cur = head
    let nextNode = head ? head.next : null
    while(nextNode) {
        let temp = nextNode.val
        nextNode.val = cur.val
        cur.val = temp
        
        cur = nextNode.next
        nextNode = nextNode.next ? nextNode.next.next : null
    }
    return head
};