/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dumy = new ListNode(0)
    let curr = dumy
    while(list1 && list2) {
        
        if(list1.val < list2.val) {
            curr.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
             curr.next = new ListNode(list2.val)
             list2 = list2.next    
        }
        curr = curr.next
    }
    
    if(list1) curr.next = list1
    if(list2) curr.next = list2
    
    return dumy.next
};