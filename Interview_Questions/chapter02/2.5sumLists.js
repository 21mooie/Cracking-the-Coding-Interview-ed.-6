const Iterator = require('../../utils/Iterator');
const LinkedList = require('../../utils/LinkedList');

// Sum Lists: You have two numbers represented by a linked list, 
// where each node contains a single digit.
// The digits are stored in reverse order,
// such that the 1's digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

const sumListsReverse = (list1, list2) => {
    const list3 = new LinkedList();
    let rollOver = 0, acc = 0;
    let iter1 = new Iterator(list1), iter2 = new Iterator(list2);
    while (iter1.hasNode() || iter2.hasNode() || rollOver > 0) {
        acc = rollOver;
        if (iter1.hasNode()) {
            acc += iter1.getData();
            iter1.getNext();
        }
        if (iter2.hasNode()) {
            acc += iter2.getData();
            iter2.getNext();
        }
        rollOver = Math.floor(acc/10);
        list3.add(acc%10);
    }
    return list3;
};

const sumLists = (list1, list2) => {
    let iter1 = new Iterator(list1), iter2 = new Iterator(list2);
    
}


exports.sumListsReverse = sumListsReverse;
exports.sumLists = sumLists;