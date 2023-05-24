/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head.next) return head
    let prev = findPreviousNode(head)
    let next = prev.next
    // break the list to the two half part
    prev.next = null

    let lastHalfPart =  traverseNode(next)
    let firstHalfPart = head
    mergeList(firstHalfPart ,lastHalfPart)
};
// merge to lists
const mergeList = (list1, list2) => {
    
    while(list1) {
       let firstNext = list1.next
       list1.next = list2
       list1 = firstNext

        let secondNext = list2.next
        if(list1) {
             list2.next = list1
            list2 = secondNext
        }

    }

}
// reverse the list
const traverseNode = (head) => {
    let prev = null
    let curr = head
    
    while(curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
    
}
// find midddle previous node
const findPreviousNode = (head) => {
   let slow =  head
   let fast = head.next
   
   while(fast.next && fast.next.next) {
         fast = fast.next.next
        slow = slow.next
   }
    return slow
} 