// Remove Dups: Write code to remove duplicates from an unsorted linked list.

//naive solution = if node not in map, push to map
//                 else delete
//O(n) space O(n) time complexity
var checkDups = function(head, node) {
    var currNode = head;
    while (currNode !== node) {
      if (currNode.value === node.value) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  };
  
var removeDups = function(head) {
    var node = head;
    while (node !== null) {
      if (node.next !== null && checkDups(head, node.next)) {
        node.next = node.next.next;
      } else {
        node = node.next;
      }
    }
    return head;
  };
  

// O(n^2) traverse list for each node visited and remove any dups
var removeDups1 = (head) => {
    let headCopyFast = head;
    let headCopySlow = head;
    let headCopy = head;
    headCopyFast = headCopyFast.next;
    while(headCopy != null) {
        while (headCopyFast != null) {
            if (headCopyFast.data === headCopy.data) {
                headCopySlow.next = headCopyFast.next;
                headCopyFast = headCopyFast.next;
            }
            headCopySlow = headCopySlow.next;
            headCopyFast = headCopyFast = headCopyFast.next;
        }
    }
    return head;
}