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
   
    let dumy = new ListNode(0, head)
    
    let length = getListLength(head)

   let pre = getPreviousNode(dumy, length - n)
   let target = pre.next
   
    pre.next = target.next
   
    return dumy.next
    
    
};

const getPreviousNode = (head, step) => {
    while(step-- > 0) {
        head = head.next
    }
    return head
}

const getListLength = (head) => {
    let length = 0
    while(head) {
        length++
        head = head.next
    }
    return length
}