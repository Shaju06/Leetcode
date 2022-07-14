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
    let temp = head
    let length = 0
    while(temp?.next) {
        length++
        temp = temp.next
    }
     
     let nth = length - n + 1
     temp = head
     let prev = null
     
     while(nth-- !=0) {
         prev = temp
         temp = temp.next  
     }
     
     if(prev != null) {
     prev.next = temp.next
     temp.next = null     
     } else {
         return head.next
      }  
     return head
 };