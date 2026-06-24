// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let oldToNew = new Map()
        oldToNew.set(null, null);

        let curr = head
        while(curr !== null){
            oldToNew.set(curr, new Node(curr.val))
            curr = curr.next
        }

        curr = head
        while(curr !== null){
            const newNode = oldToNew.get(curr)
            newNode.next = oldToNew.get(curr.next)
            newNode.random = oldToNew.get(curr.random)
            curr = curr.next
        }

        return oldToNew.get(head)
    }
}
