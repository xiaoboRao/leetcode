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
var reverseList = function(head) {
    
    const reverse = (pre, head) => {
        if(!head) return pre
        let temp = head.next
        head.next = pre
        pre = head
        return reverse(pre, temp)
    }
    return reverse(null, head)
};