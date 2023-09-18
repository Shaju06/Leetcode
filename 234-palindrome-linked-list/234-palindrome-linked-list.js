/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let getMiddleList = middle(head)
    let reverseRigthHalfList = reverseList(getMiddleList)
    
    while(head && reverseRigthHalfList) {
        if(head.val != reverseRigthHalfList.val) {
            return false
        }
        head = head.next
        reverseRigthHalfList = reverseRigthHalfList.next
    }
    return true
  
    
    // Get middle of the list
    function middle(head) {
        let slow = head
        let fast = head
        while(fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    
    
    //Reverse the rigth half of list
    function reverseList(current) {
        let prev = null
        while(current) {
            const next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev
    }
    
};