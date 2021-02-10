const Iterator = require('../../utils/Iterator');

// Remove Dups: Write code to remove duplicates from an unsorted linked list.

//naive solution = if node not in map, push to map
//                 else delete
//O(n) space O(n) time complexity
const removeDupsMap = (list) => {
  const map = new Map();
  const iter = new Iterator(list);
  const iterTail = new Iterator(list);
  map.set(iter.getData(), true);
  iterTail.getNext();
  while (iterTail.node !== null) {
    if (map.has(iterTail.getData())) {
      iter.setNext(iterTail.peekNext());
      iterTail.getNext();
    } else {
      map.set(iterTail.getData(), true);
      iter.getNext();
      iterTail.getNext();
    }
  }
  return list;
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

exports.removeDupsMap = removeDupsMap;