const Iterator = require('../../utils/Iterator');
const LinkedList = require('../../utils/LinkedList');
const { NextNode } = require('../../utils/Node');
const Stack = require('../../utils/Stack');

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
    const stack1 = new Stack(), stack2 = new Stack();
    while (iter1.hasNode() || iter2.hasNode()) {
        if (iter1.hasNode()) {
            stack1.push(iter1.getData());
            iter1.getNext();
        }
        if (iter2.hasNode()) {
            stack2.push(iter2.getData());
            iter2.getNext();
        }
    }
    let exp = -1, acc = 0;
    while (!stack1.isEmpty() || !stack2.isEmpty()) {
        let curr = 0;
        exp+=1;
        if (!stack1.isEmpty()) {
            curr += stack1.pop();
        }
        if (!stack2.isEmpty()) {
            curr += stack2.pop();
        }
        curr = curr * Math.pow(10, exp);
        acc += curr;
    }
    while (Math.floor(acc/Math.pow(10, exp)) > 10) {
        exp+=1;
    }
    let list3 = new LinkedList();
    while (acc > 0) {
        list3.add(Math.floor(acc/Math.pow(10, exp)));
        acc = acc % Math.pow(10, exp);
        exp -=1;
    }
    return list3;
}

const sumListsRecursive = (list1, list2) => {
    function sumListsHelper(list1, list2, carry){
        if(!list1 && !list2 && carry===0){
            return null;
        }
        let curr = carry;
        if (list1) {
            curr += list1.data;
            list1  = list1.next;
        }
        if (list2) {
            curr += list2.data;
            list2 = list2.next;
        }
        carry = Math.floor(curr/10);
        curr = curr % 10;
        let list3 = new NextNode(curr);
        list3.next = sumListsHelper(list1, list2, carry);
        return list3;
    }
    return sumListsHelper(list1, list2, 0);
}


exports.sumListsReverse = sumListsReverse;
exports.sumLists = sumLists;
exports.sumListsRecursive = sumListsRecursive;