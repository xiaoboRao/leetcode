/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    if(!head) return null
    let currentNode = head
    let length = getListLength(head)
    
    let swapTime = length - k % length 
    console.log(length, swapTime)
    
    while(--swapTime) {
        currentNode = currentNode.next

    }
    let endNode = currentNode

    
    while(endNode.next) {
        endNode = endNode.next
    }
    console.log(endNode)

    endNode.next = head
    let newHead = currentNode.next
    currentNode.next = null
    return newHead


    
};

const getListLength = (list) => {
    let length = 0
    while(list) {
        length++
        list = list.next
    }
    return length
}