const Iterator = require('../../utils/Iterator');
const LinkedList = require('../../utils/LinkedList');


// Delete Middle Node: Implement an algorithm to delete a node in the middle 
// (ie., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
// EXAMPLE
// Input: the node c from the linked list a- >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f

// O(1) solution
// Unable to solve if node to be deleted is at end of Linked List
// I added a way to complete this since I was passing in the list to function already
const deleteMiddleNode = (list, iter) => {
    const newIter = new Iterator();
    newIter.setIterator(iter);
    newIter.getNext();
    if (newIter.hasNode()) {
        const data = newIter.getData();
        newIter.getNext();
        iter.setData(data);
        iter.setNext(newIter.getCurrNode());
    } else {
        let currNode = list.getHead();
        while (currNode !== iter.getCurrNode()) {
            currNode = currNode.next;
        }
        currNode.next = null;
    }
    return list;
}

module.exports = deleteMiddleNode;