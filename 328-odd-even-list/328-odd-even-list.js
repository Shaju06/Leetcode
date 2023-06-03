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
 var oddEvenList = function(head) {
    if(!head || !head.next) return head
    let slow = head
    let fast = head.next
    while(fast && fast.next) {
        const add = fast.next
        fast.next = add.next
        fast = fast.next
        add.next = slow.next
        slow.next = add
        slow = slow.next
    }
    return head
};