/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode();
        let end = dummy

        while(list1 !== null & list2 !== null){
            if(list1.val <= list2.val){
                end.next = list1;
                list1 = list1.next
            } else {
                end.next = list2
                list2 = list2.next
            }
            end = end.next
        }

        if(list1 !== null) end.next = list1;
        else  end.next = list2

        return dummy.next
    }
}
