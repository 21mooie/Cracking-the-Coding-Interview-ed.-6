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
const removeDupsQuad = (list) => {
  let iter = new Iterator(list);
  let iterCheck = new Iterator(list);
  while (iter.node !== null) {
    iterCheck.setIterator(iter);
    while(iterCheck.node !== null) {
      if (iterCheck.peekNext() && iterCheck.peekNext().data === iter.getData()) {
        iterCheck.setNext(iterCheck.peekNext().next);
      }
      iterCheck.getNext();
    }
    iter.getNext();
  }
  return list;
};

exports.removeDupsMap = removeDupsMap;
exports.removeDupsQuad = removeDupsQuad;