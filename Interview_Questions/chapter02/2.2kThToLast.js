const Iterator = require('../../utils/Iterator');
const Stack = require('../../utils/Stack');
// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

// O(n) iterative solution using a stack with O(n) storage
var kthToLastStack = (iter, k) => {
    if (k < 0)
        return new Error('k < 0');
    const stack = new Stack();
    while(!iter.isNull()) {
        stack.push(iter.getData());
        iter.getNext();
    }
    for (let i=0; i<k; i++){
        if (stack.isEmpty()) {
            return new Error('k > length of list');
        } else {
            stack.pop();
        }
    }
    return stack.peek();
}

//O(n) recursive solution
const kthToLastRecursive = (node, k, curr = -1) => {
    let answer;
    function recurse(node, k) {
        if (k<0) {
            return new Error('k < 0');
        }
        if (node.next) {
            recurse(node.next, k);
        }
        curr+=1;
        if (curr === k) {
            answer = node.data;
        }
        return answer;
    }
    const result = recurse(node, k);
    return result ? result : new Error('k > length of list');
};

// Optimal
// O(2n) iterative solution
const kthToLastIter = (iter, k ) => {
    if (k < 0)
        return new Error('k < 0');
    let listSize = 0, endFinder = new Iterator();
    endFinder.setIterator(iter);
    while(!endFinder.isNull()) {
        listSize += 1;
        endFinder.getNext();
    }
    if (k >= listSize) {
        return new Error('k > length of list');
    }
    for (let i=0; i<listSize-(k+1); i++) {
        iter.getNext();
    }
    return iter.getData();
}

exports.kthToLastRecursive = kthToLastRecursive;
exports.kthToLastStack = kthToLastStack;
exports.kthToLastIter = kthToLastIter;
